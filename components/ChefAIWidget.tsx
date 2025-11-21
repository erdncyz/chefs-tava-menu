import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles, ChefHat } from 'lucide-react';
import { getChefRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChefAIWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Merhaba! Ben Şef'in yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getChefRecommendation(input);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-amber-500 to-yellow-500 text-black p-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300 group animate-bounce-slow"
        >
          <MessageSquare size={28} className="fill-black/20" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-50 w-full md:w-[400px] h-full md:h-[600px] flex flex-col bg-[#18181b]/95 backdrop-blur-xl md:rounded-3xl shadow-2xl border border-white/10 overflow-hidden animate-in slide-in-from-bottom-10 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#18181b] to-[#27272a] p-5 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/20 p-2.5 rounded-2xl border border-amber-500/20">
                <ChefHat size={22} className="text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Şef'in Asistanı</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                  <span className="text-xs text-gray-400 font-medium">Size özel öneriler</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-white/5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl rounded-tr-sm font-medium' 
                      : 'bg-[#27272a] text-gray-200 rounded-2xl rounded-tl-sm border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-[#27272a] p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center border border-white/5">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-[#09090b] border-t border-white/10">
            <div className="flex gap-2 items-end">
              <div className="flex-1 bg-[#27272a] rounded-2xl border border-white/5 focus-within:border-amber-500/50 transition-colors">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Hangi lezzeti arıyorsunuz?"
                  className="w-full bg-transparent text-white px-4 py-3.5 text-sm focus:outline-none resize-none placeholder-gray-500"
                />
              </div>
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-amber-500 text-black p-3.5 rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <span className="text-[10px] text-gray-600 flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                <Sparkles size={10} className="text-amber-500" /> Powered by Gemini AI
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChefAIWidget;