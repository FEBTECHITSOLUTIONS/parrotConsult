// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getOpenAIResponse } from "../service/openaiApi";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function ChatBot() {
//   const query = useQuery().get("query"); // 🟢 initial question from search bar
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! I'm Perry 🐦 — Ask me anything!" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🧠 Trigger auto-reply if query is passed in URL
//   useEffect(() => {
//     const initPrompt = async () => {
//       if (!query) return;

//       const newMessages = [
//         ...messages,
//         { sender: "user", text: query }
//       ];
//       setMessages(newMessages);
//       setLoading(true);

//       try {
//         const reply = await getOpenAIResponse(query);
//         setMessages([...newMessages, { sender: "bot", text: reply }]);
//       } catch {
//         setMessages([...newMessages, { sender: "bot", text: "Oops! Something went wrong." }]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     initPrompt();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   const handleSend = async () => {
//     const prompt = input.trim();
//     if (!prompt) return;

//     const newMessages = [...messages, { sender: "user", text: prompt }];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       const reply = await getOpenAIResponse(prompt);
//       setMessages([...newMessages, { sender: "bot", text: reply }]);
//     } catch {
//       setMessages([...newMessages, { sender: "bot", text: "Perry failed to respond." }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <header className="p-4 bg-green-800 text-white text-xl font-bold shadow">
//         🐦 Perry the ChatBot
//       </header>

//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`max-w-md px-4 py-2 rounded-lg shadow ${
//               msg.sender === "user"
//                 ? "bg-green-200 self-end text-right ml-auto"
//                 : "bg-white self-start text-left mr-auto"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         {loading && (
//           <div className="bg-white px-4 py-2 rounded-lg shadow w-fit text-gray-500 animate-pulse">
//             Perry is thinking...
//           </div>
//         )}
//       </div>

//       <div className="p-4 bg-white border-t flex items-center">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Type your message..."
//           className="flex-1 p-2 border rounded-lg mr-2 focus:outline-none"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getOpenAIResponse } from "../service/openaiApi";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function ChatBot() {
//   const query = useQuery().get("query"); // 🟢 initial question from search bar
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! I'm Parry 🐦 — Ask me anything!" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);

//   // 🧠 Trigger auto-reply if query is passed in URL
//   useEffect(() => {
//     const initPrompt = async () => {
//       if (!query) return;

//       const newMessages = [
//         ...messages,
//         { sender: "user", text: query }
//       ];
//       setMessages(newMessages);
//       setLoading(true);
//       setIsTyping(true);

//       try {
//         const reply = await getOpenAIResponse(query);
//         setMessages([...newMessages, { sender: "bot", text: reply }]);
//       } catch {
//         setMessages([...newMessages, { sender: "bot", text: "Oops! Something went wrong." }]);
//       } finally {
//         setLoading(false);
//         setIsTyping(false);
//       }
//     };

//     initPrompt();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   const handleSend = async () => {
//     const prompt = input.trim();
//     if (!prompt) return;

//     const newMessages = [...messages, { sender: "user", text: prompt }];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);
//     setIsTyping(true);

//     try {
//       const reply = await getOpenAIResponse(prompt);
//       setMessages([...newMessages, { sender: "bot", text: reply }]);
//     } catch {
//       setMessages([...newMessages, { sender: "bot", text: "Perry failed to respond." }]);
//     } finally {
//       setLoading(false);
//       setIsTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Header */}
//       <header className="relative backdrop-blur-sm bg-white/80 border-b border-emerald-200/50 shadow-lg">
//         <div className="p-6 flex items-center justify-center space-x-4">
//           <div className="relative">
//             <img
//               src="/parrot.jpg"
//               alt="Perry"
//               className="w-12 h-12 rounded-full shadow-lg ring-4 ring-emerald-200/50 hover:ring-emerald-300/50 transition-all duration-300 hover:scale-110"
//             />
//             <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white animate-pulse"></div>
//           </div>
//           <div className="text-center">
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
//               Perry the ChatBot
//             </h1>
//             <p className="text-sm text-emerald-600/80 font-medium">Your AI Assistant</p>
//           </div>
//         </div>
//       </header>

//       {/* Messages Container */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex items-start space-x-3 animate-fade-in ${
//               msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
//             }`}
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             {/* Avatar */}
//             <div className={`flex-shrink-0 ${msg.sender === "user" ? "order-2" : ""}`}>
//               {msg.sender === "bot" ? (
//                 <img
//                   src="/parrot.jpg"
//                   alt="Parry"
//                   className="w-8 h-8 rounded-full shadow-md ring-2 ring-emerald-200/50"
//                 />
//               ) : (
//                 <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
//                   <span className="text-white text-xs font-bold">You</span>
//                 </div>
//               )}
//             </div>

//             {/* Message Bubble */}
//             <div
//               className={`max-w-lg px-5 py-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
//                 msg.sender === "user"
//                   ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white ml-auto"
//                   : "bg-white/90 text-gray-800 border border-emerald-100/50"
//               }`}
//             >
//               <p className="text-sm leading-relaxed">{msg.text}</p>
//             </div>
//           </div>
//         ))}

//         {/* Typing indicator */}
//         {isTyping && (
//           <div className="flex items-start space-x-3 animate-fade-in">
//             <img
//               src="/parrot.jpg"
//               alt="Parry"
//               className="w-8 h-8 rounded-full shadow-md ring-2 ring-emerald-200/50"
//             />
//             <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-emerald-100/50">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-300"></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Area */}
//       <div className="relative backdrop-blur-sm bg-white/80 border-t border-emerald-200/50 p-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="relative flex items-center space-x-4">
//             <div className="flex-1 relative">
//               <textarea
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyPress}
//                 placeholder="Type your message here..."
//                 className="w-full p-4 pr-12 rounded-2xl border border-emerald-200/50 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30 transition-all duration-300 resize-none backdrop-blur-sm bg-white/90 text-gray-800 placeholder-gray-500 shadow-lg"
//                 rows="1"
//                 style={{ minHeight: '56px', maxHeight: '120px' }}
//               />
//               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                 </svg>
//               </div>
//             </div>

//             <button
//               onClick={handleSend}
//               disabled={loading || !input.trim()}
//               className="group relative p-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {loading ? (
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//               ) : (
//                 <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           <div className="mt-3 text-center">
//             <p className="text-xs text-emerald-600/70">
//               Press Enter to send • Shift + Enter for new line
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out forwards;
//         }

//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 6px;
//         }

//         ::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: rgba(16, 185, 129, 0.3);
//           border-radius: 3px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: rgba(16, 185, 129, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getOpenAIResponse } from "../service/openaiApi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ChatBot() {
  const [chatHistory, setChatHistory] = useState([]);

  const query = useQuery().get("query");
  const CHAT_HISTORY_KEY = "chatHistory";

  const loadChatHistory = () => {
    const history = localStorage.getItem(CHAT_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  };

  const saveChatToHistory = (chat) => {
    const history = loadChatHistory();
    const updated = [chat, ...history].slice(0, 5); // keep latest 5 chats
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(updated));
  };
  // 🟢 initial question from search bar
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Parry 🐦 — Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const messagesContainer = document.querySelector(".flex-1.overflow-y-auto");
    if (messagesContainer) {
      messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // 🧠 Trigger auto-reply if query is passed in URL
  // useEffect(() => {
  //   const initPrompt = async () => {
  //     if (!query) return;

  //     const newMessages = [
  //       ...messages,
  //       { sender: "user", text: query }
  //     ];

  //     setMessages(newMessages);
  //     setLoading(true);
  //     setIsTyping(true);

  //     setTimeout(() => scrollToBottom(), 300);

  //     try {
  //       const reply = await getOpenAIResponse(query);
  //       setMessages([...newMessages, { sender: "bot", text: reply }]);
  //       setTimeout(() => scrollToBottom(), 300);
  //     } catch {
  //       setMessages([...newMessages, { sender: "bot", text: "Oops! Something went wrong." }]);
  //       setTimeout(() => scrollToBottom(), 300);
  //     } finally {
  //       setLoading(false);
  //       setIsTyping(false);
  //     }
  //   };

  //   initPrompt();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

  useEffect(() => {
    const initPrompt = async () => {
      if (!query) {
        const history = loadChatHistory();
        if (history.length > 0) {
          setMessages(history[0]); // Load the latest chat session
        }
        return;
      }

      const newMessages = [...messages, { sender: "user", text: query }];
      setMessages(newMessages);
      setLoading(true);
      setIsTyping(true);
      setTimeout(() => scrollToBottom(), 300);

      try {
        const reply = await getOpenAIResponse(query);
        const updated = [...newMessages, { sender: "bot", text: reply }];
        setMessages(updated);
        saveChatToHistory(updated); // Save to history
      } catch {
        const failed = [
          ...newMessages,
          { sender: "bot", text: "Oops! Something went wrong." },
        ];
        setMessages(failed);
        saveChatToHistory(failed);
      } finally {
        setLoading(false);
        setIsTyping(false);
        setTimeout(() => scrollToBottom(), 300);
      }
    };

    initPrompt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const history = loadChatHistory();
    setChatHistory(history);
  }, []);

  //   const handleSend = async () => {
  //     const prompt = input.trim();
  //     if (!prompt) return;

  //     const newMessages = [...messages, { sender: "user", text: prompt }];
  //     setMessages(newMessages);
  //     setInput("");
  //     setLoading(true);
  //     setIsTyping(true);

  //     try {
  //       const reply = await getOpenAIResponse(prompt);
  //       setMessages([...newMessages, { sender: "bot", text: reply }]);
  //     } catch {
  //       setMessages([...newMessages, { sender: "bot", text: "Perry failed to respond." }]);
  //     } finally {
  //       setLoading(false);
  //       setIsTyping(false);
  //     }
  //   };
  // const handleSend = async () => {
  //     const prompt = input.trim();
  //     if (!prompt) return;

  //     const newMessages = [...messages, { sender: "user", text: prompt }];
  //     setMessages(newMessages);
  //     setInput("");
  //     setLoading(true);
  //     setIsTyping(true);

  //     // Scroll after user message
  //     setTimeout(() => scrollToBottom(), 100);

  //     try {
  //       const reply = await getOpenAIResponse(prompt);
  //       setMessages([...newMessages, { sender: "bot", text: reply }]);
  //       // Scroll after bot response
  //       setTimeout(() => scrollToBottom(), 100);
  //     } catch {
  //       setMessages([...newMessages, { sender: "bot", text: "Perry failed to respond." }]);
  //       setTimeout(() => scrollToBottom(), 100);
  //     } finally {
  //       setLoading(false);
  //       setIsTyping(false);
  //     }
  //   };

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt) return;

    const newMessages = [...messages, { sender: "user", text: prompt }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setIsTyping(true);
    setTimeout(() => scrollToBottom(), 100);

    try {
      const reply = await getOpenAIResponse(prompt);
      const updatedMessages = [...newMessages, { sender: "bot", text: reply }];
      setMessages(updatedMessages);

      // ⬅️ Save chat to history here
      saveChatToHistory(updatedMessages);

      setTimeout(() => scrollToBottom(), 100);
    } catch {
      const failedMessages = [
        ...newMessages,
        { sender: "bot", text: "Perry failed to respond." },
      ];
      setMessages(failedMessages);
      saveChatToHistory(failedMessages); // Save failed attempt too
      setTimeout(() => scrollToBottom(), 100);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float-delay opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-delay-2 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float-delay opacity-70"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="p-6 flex items-center justify-center space-x-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <img
              src="/parrot.jpg"
              alt="Perry"
              className="relative w-14 h-14 rounded-full shadow-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full ring-2 ring-white/20 animate-pulse shadow-lg"></div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Perry the ChatBot
            </h1>
            <p className="text-sm text-emerald-300/80 font-medium animate-fade-in">
              Your AI Assistant • Online
            </p>
          </div>
        </div>
      </header>
      {/* Chat History Dropdown */}
      <div className="px-6 pt-4">
        {chatHistory.length > 0 && (
          <div className="mb-4">
            <label className="text-white text-sm font-semibold mb-1 block">
              Previous Chats:
            </label>
            <select
              className="w-full p-2 rounded bg-white/20 text-black"
              onChange={(e) => {
                const selectedIndex = e.target.value;
                if (selectedIndex !== "") {
                  setMessages(chatHistory[selectedIndex]);
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select a previous chat
              </option>
              {chatHistory.map((chat, index) => (
                <option key={index} value={index}>
                  Chat #{index + 1} — {chat[1]?.text?.slice(0, 30) || "..."}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 relative scrollbar-custom">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 animate-slide-in ${
              msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Avatar */}
            <div
              className={`flex-shrink-0 ${
                msg.sender === "user" ? "order-2" : ""
              }`}
            >
              {msg.sender === "bot" ? (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
                  <img
                    src="/parrot.jpg"
                    alt="Parry"
                    className="relative w-10 h-10 rounded-full shadow-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                </div>
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-lg px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] group ${
                msg.sender === "user"
                  ? "bg-gradient-to-br from-purple-500/90 to-pink-500/90 text-white ml-auto border border-white/20"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/15"
              }`}
            >
              <p className="text-sm leading-relaxed group-hover:text-shadow-sm">
                {msg.text}
              </p>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                  msg.sender === "user"
                    ? "from-purple-400 to-pink-400"
                    : "from-emerald-400 to-teal-400"
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
        {/* Enhanced Typing indicator */}
        {isTyping && (
          <div className="flex items-start space-x-3 animate-slide-in">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-60 animate-pulse"></div>
              <img
                src="/parrot.jpg"
                alt="Parry"
                className="relative w-10 h-10 rounded-full shadow-xl ring-2 ring-white/20"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white/20 animate-pulse-gentle">
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce shadow-lg"></div>
                  <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce delay-150 shadow-lg"></div>
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
                </div>
                <span className="text-emerald-300 text-xs ml-2 animate-fade">
                  Perry is thinking...
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Input Area */}
      <div className="relative backdrop-blur-xl bg-white/5 border-t border-white/10 pb-19 pt-9 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center space-x-4">
            <div className="flex-1 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-300"></div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
                className="relative w-full p-5 pr-14 rounded-2xl border border-white/20 focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/20 transition-all duration-300 resize-none backdrop-blur-xl bg-white/10 text-white placeholder-white/60 shadow-2xl focus:shadow-3xl"
                rows="1"
                style={{ minHeight: "60px", maxHeight: "120px" }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 group-focus-within:text-emerald-400 transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="group relative p-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative">
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-white/60 animate-fade-in">
              Press{" "}
              <span className="text-emerald-400 font-semibold">Enter</span> to
              send •{" "}
              <span className="text-emerald-400 font-semibold">
                Shift + Enter
              </span>{" "}
              for new line
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(-3deg);
          }
          50% {
            transform: translateY(-25px) rotate(7deg);
          }
          75% {
            transform: translateY(-5px) rotate(-2deg);
          }
        }

        @keyframes float-delay-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(8deg);
          }
          50% {
            transform: translateY(-20px) rotate(-4deg);
          }
          75% {
            transform: translateY(-8px) rotate(6deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade {
          animation: fade-in 2s ease-in-out infinite alternate;
        }

        /* Custom scrollbar */
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: rgba(16, 185, 129, 0.3) transparent;
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgba(16, 185, 129, 0.4),
            rgba(20, 184, 166, 0.4)
          );
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgba(16, 185, 129, 0.6),
            rgba(20, 184, 166, 0.6)
          );
        }

        /* Text shadow */
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Enhanced shadow */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Glass effect */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
