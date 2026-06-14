"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Sparkles, RefreshCw, AlertCircle, HelpCircle } from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
  isError?: boolean;
}

export default function AIPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"checking" | "active" | "sleeping" | "offline">("checking");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What services do you offer?",
    "Tell me about the founder, Tahir Shah",
    "What are your pricing packages?",
    "How do I start a project?",
  ];

  // Check backend server status
  const checkStatus = async () => {
    setStatus("checking");
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 6000); // 6s timeout for fast check
      const res = await fetch("https://tahirshahcoding-eaglenest-ai.hf.space/", { 
        signal: controller.signal,
        headers: { "Accept": "application/json" }
      });
      clearTimeout(id);
      if (res.ok) {
        setStatus("active");
      } else {
        setStatus("offline");
      }
    } catch (err: any) {
      if (err.name === "AbortError") {
        // Took too long: Render free tier is sleeping
        setStatus("sleeping");
      } else {
        setStatus("offline");
      }
    }
  };

  useEffect(() => {
    // Session state recovery
    try {
      const savedMessages = sessionStorage.getItem("en_ai_messages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      const savedOpen = sessionStorage.getItem("en_ai_open");
      if (savedOpen === "true") {
        setIsOpen(true);
      }
    } catch (e) {
      console.error("Error reading sessionStorage", e);
    }

    checkStatus();

    // Trigger tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 9 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  // Sync messages to session storage
  useEffect(() => {
    try {
      if (messages.length > 0) {
        sessionStorage.setItem("en_ai_messages", JSON.stringify(messages));
      }
    } catch (e) {
      console.error("Error saving messages to sessionStorage", e);
    }
  }, [messages]);

  // Sync open state
  useEffect(() => {
    try {
      sessionStorage.setItem("en_ai_open", String(isOpen));
    } catch (e) {
      console.error("Error saving open state to sessionStorage", e);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMsg = textToSend.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setIsTyping(true);

    // Push temporary empty message for AI streaming
    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    let isWarmupTextShown = false;
    let streamReader: ReadableStreamDefaultReader<Uint8Array> | null = null;

    try {
      const res = await fetch("https://tahirshahcoding-eaglenest-ai.hf.space/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      if (!res.body) {
        throw new Error("No response body received");
      }

      // If we got a successful connection, let's mark it active
      if (status !== "active") {
        setStatus("active");
      }

      streamReader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      let doneStreaming = false;

      while (true) {
        if (doneStreaming) break;
        const { value, done } = await streamReader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || ""; // Save partial line to buffer

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          if (trimmed.startsWith("data: ")) {
            const content = trimmed.substring(6);

            if (content === "[DONE]") {
              doneStreaming = true;
              break;
            }

            if (content.startsWith("[Error:")) {
              doneStreaming = true;
              throw new Error(content.slice(7, -1) || "AI generation failed");
            }

            // Decode escaped newlines and backslashes
            const decodedContent = content.replace(/\\n/g, "\n").replace(/\\\\/g, "\\");

            // Append chunk to the last AI message without mutating state
            setMessages((prev) => {
              const updated = [...prev];
              const lastMsgIndex = updated.length - 1;
              if (lastMsgIndex >= 0 && updated[lastMsgIndex].sender === "ai") {
                updated[lastMsgIndex] = {
                  ...updated[lastMsgIndex],
                  text: updated[lastMsgIndex].text + decodedContent
                };
              }
              return updated;
            });
          }
        }
      }
    } catch (error: any) {
      console.error("Chat error:", error);

      // Handle custom error text or fallback
      let errMsg = "I encountered a connection error. Please ensure the EagleNest AI server is active and try again.";
      if (status === "sleeping") {
        errMsg = "EagleNest AI took too long to respond. The Hugging Face Space is likely waking up from sleep. Please try again in a few seconds.";
      } else if (error.message) {
        errMsg = `Error: ${error.message}. Please try again shortly.`;
      }

      // Update last message with the error or append it
      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
        if (lastMsg && lastMsg.sender === "ai" && lastMsg.text === "") {
          lastMsg.text = errMsg;
          lastMsg.isError = true;
        } else {
          updated.push({ sender: "ai", text: errMsg, isError: true });
        }
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    sessionStorage.removeItem("en_ai_messages");
  };

  // Custom text formatter for streaming message markdown
  function formatMessageText(text: string) {
    if (!text) return null;
    const lines = text.split("\n");

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("* ");
      let content = line;

      if (isBullet) {
        content = trimmed.replace(/^[-*]\s+/, "");
      }

      // Parse bold **text**
      const parts = content.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-bold text-[#1a1633]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={idx} className="ml-5 list-disc mb-1.5 pl-1 text-[#4B49AC]/80 leading-relaxed text-sm">
            <span>{renderedLine}</span>
          </li>
        );
      }

      return (
        <p key={idx} className={trimmed === "" ? "h-2" : "mb-2 text-[#4B49AC]/80 leading-relaxed text-sm"}>
          {renderedLine}
        </p>
      );
    });
  }

  return (
    <>
      {/* 1. FLOATING ACTION BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Hover Tooltip/Badge */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              onClick={() => {
                setIsOpen(true);
                setShowTooltip(false);
              }}
              className="bg-white/95 backdrop-blur-md px-4 py-2.5 border border-[#7978E9]/20 shadow-[0_10px_25px_rgba(75,73,172,0.15)] rounded-2xl cursor-pointer pointer-events-auto flex items-center gap-2 select-none hover:bg-white hover:border-[#4B49AC]/30 transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4B49AC] animate-bounce" />
              <span className="text-xs font-bold text-[#4B49AC] font-outfit tracking-wide">
                Ask EagleNest AI!
              </span>
              <X 
                className="w-3 h-3 text-[#4B49AC]/40 hover:text-[#4B49AC] ml-1.5 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB Trigger Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className={`
            relative h-14 w-14 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 pointer-events-auto hover:scale-105 active:scale-95
            ${isOpen 
              ? "bg-[#1a1633] shadow-md rotate-90" 
              : "bg-gradient-to-tr from-[#4B49AC] via-[#7978E9] to-[#98BDFF] hover:shadow-[0_8px_30px_rgba(75,73,172,0.4)]"
            }
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6 animate-pulse-slow" />
              {/* Online Pulse Indicator */}
              {status === "active" && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              )}
              {status === "sleeping" && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 animate-pulse"></span>
                </span>
              )}
            </div>
          )}
        </button>
      </div>

      {/* 2. CHAT POPUP DRAWER/CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[390px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-8rem)] bg-white/90 backdrop-blur-xl border border-[#7978E9]/15 shadow-[0_20px_50px_rgba(75,73,172,0.18)] rounded-3xl overflow-hidden flex flex-col font-sans"
          >
            {/* Ambient background glow inside the popup */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#98BDFF]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#7978E9]/10 blur-[80px] rounded-full pointer-events-none" />

            {/* HEADER */}
            <header className="relative z-10 px-5 py-4 border-b border-[#4B49AC]/8 flex items-center justify-between bg-white/40 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#4B49AC] to-[#7978E9] flex items-center justify-center text-white shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-brand text-sm font-bold text-[#1a1633] tracking-wide">
                    EagleNest AI
                  </h3>
                  {/* Status label */}
                  <div className="flex items-center gap-1.5 mt-0.5" onClick={checkStatus}>
                    {status === "checking" && (
                      <>
                        <RefreshCw className="w-2.5 h-2.5 text-[#4B49AC] animate-spin" />
                        <span className="text-[10px] text-[#4B49AC]/50 font-medium">Verifying AI node...</span>
                      </>
                    )}
                    {status === "active" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-emerald-600 font-semibold">Active & Online</span>
                      </>
                    )}
                    {status === "sleeping" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-[10px] text-amber-600 font-semibold cursor-pointer hover:underline" title="Backend is deployed on Hugging Face Spaces. Waking it up now.">
                          Waking up server...
                        </span>
                      </>
                    )}
                    {status === "offline" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                        <span className="text-[10px] text-gray-500 font-medium cursor-pointer hover:underline" title="Click to retry connection">
                          Offline (Click to retry)
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="p-2 text-xs text-[#4B49AC]/50 hover:text-[#4B49AC] hover:bg-[#4B49AC]/5 rounded-xl transition-all font-semibold"
                    title="Clear Conversation"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#4B49AC]/60 hover:text-[#1a1633] hover:bg-[#4B49AC]/8 rounded-xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* CHAT MESSAGES BODY */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4 relative z-10 scrollbar-thin scrollbar-thumb-[#7978E9]"
            >
              {messages.length === 0 ? (
                /* WELCOME INTERFACE */
                <div className="h-full flex flex-col justify-center items-center text-center px-4 py-8 animate-fade-in-up">
                  <div className="h-12 w-12 rounded-2xl bg-[#4B49AC]/5 border border-[#4B49AC]/10 flex items-center justify-center mb-4 text-[#4B49AC] shadow-sm">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-outfit text-base font-bold text-[#1a1633] mb-2">
                    How can we build today?
                  </h4>
                  <p className="text-xs text-[#4B49AC]/60 leading-relaxed max-w-[280px] mb-6">
                    I am the EagleNest intelligent agent, connected to our vector knowledge database. Ask me about our services, pricing, projects, or our core operations.
                  </p>

                  {/* Suggestion Prompts */}
                  <div className="w-full space-y-2">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#4B49AC]/40 text-left mb-2 px-1">
                      Suggested Questions
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {quickPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSubmit(prompt)}
                          className="w-full text-left bg-white/70 hover:bg-[#4B49AC]/5 border border-[#4B49AC]/10 text-xs font-semibold text-[#4B49AC] p-3 rounded-2xl hover:scale-[1.01] hover:border-[#4B49AC]/25 hover:shadow-sm transition-all duration-200"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* CHAT HISTORY */
                <>
                  {status === "sleeping" && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-2.5 text-xs text-amber-800 leading-relaxed animate-fade-in-up">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                      <div>
                        <span className="font-bold">Hugging Face Space Sleep Timer: </span>
                        The AI backend takes a few seconds to wake up if it has been inactive for more than 48 hours. Thanks for your patience!
                      </div>
                    </div>
                  )}
                  
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                    >
                      <div
                        className={`
                          max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm
                          ${msg.sender === "user"
                            ? "bg-gradient-to-r from-[#4B49AC] to-[#7978E9] text-white rounded-br-none"
                            : msg.isError
                              ? "bg-rose-50 border border-rose-200 text-rose-800 rounded-bl-none"
                              : "bg-[#4B49AC]/5 border border-[#4B49AC]/10 text-[#1a1633] rounded-bl-none"
                          }
                        `}
                      >
                        {msg.sender === "ai" && msg.text === "" ? (
                          /* Generating / loading indicator */
                          <div className="flex items-center gap-1.5 py-1 px-2">
                            <span className="h-2 w-2 bg-[#4B49AC]/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="h-2 w-2 bg-[#4B49AC]/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="h-2 w-2 bg-[#4B49AC]/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        ) : msg.sender === "ai" ? (
                          formatMessageText(msg.text)
                        ) : (
                          <p className="leading-relaxed text-sm whitespace-pre-wrap">{msg.text}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Render inline indicator if loader is running but no messages created yet */}
                  {isTyping && messages[messages.length - 1]?.text !== "" && (
                    <div className="flex justify-start">
                      <div className="bg-[#4B49AC]/5 border border-[#4B49AC]/10 rounded-2xl rounded-bl-none px-4 py-2 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-[#4B49AC]/40 rounded-full animate-bounce" />
                          <span className="h-1.5 w-1.5 bg-[#4B49AC]/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-1.5 w-1.5 bg-[#4B49AC]/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT FOOTER FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(input);
              }}
              className="relative z-10 p-4 border-t border-[#4B49AC]/8 bg-white/40 backdrop-blur-sm flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  placeholder={status === "sleeping" ? "Wait for server, or ask..." : "Ask EagleNest AI..."}
                  className="w-full bg-white border border-[#4B49AC]/15 focus:border-[#4B49AC]/40 focus:bg-white focus:ring-4 focus:ring-[#7978E9]/10 rounded-full py-3.5 pl-4 pr-12 text-sm text-[#1a1633] placeholder-[#4B49AC]/40 outline-none transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className={`
                    absolute right-1.5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    ${!input.trim() || isTyping
                      ? "text-[#4B49AC]/30 bg-transparent"
                      : "text-white bg-gradient-to-r from-[#4B49AC] to-[#7978E9] hover:shadow-md hover:scale-105 active:scale-95"
                    }
                  `}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
