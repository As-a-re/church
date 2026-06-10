'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  const getChurchResponse = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('service')) {
      return 'Our worship services are held every Sunday. Please check the Worship page for the latest service times.';
    }

    if (q.includes('location') || q.includes('address')) {
      return 'Hilltop Church of Christ is located in Kwabenya. Please see the Contact page for directions.';
    }

    if (q.includes('live') || q.includes('stream') || q.includes('youtube')) {
      return 'You can watch our livestreams on our YouTube channel.';
    }

    if (q.includes('facebook')) {
      return 'You can follow Hilltop Church of Christ on Facebook for updates and announcements.';
    }

    if (q.includes('tiktok')) {
      return 'You can also follow Hilltop Church of Christ on TikTok.';
    }

    if (q.includes('contact') || q.includes('phone')) {
      return 'Please visit our Contact page for the latest phone numbers and contact information.';
    }

    if (q.includes('donation') || q.includes('give')) {
      return 'Donations can be sent via Mobile Money to 0545015488.';
    }

    return 'Thank you for your question. Please check the relevant page on our website or contact the church office for more information.';
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getChurchResponse(input),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      assistantMessage,
    ]);

    setInput('');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-card border border-border rounded-lg shadow-xl flex flex-col z-40 max-h-[600px]">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <MessageCircle size={20} />
              Church Assistant
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">
                  Welcome to Hilltop Church of Christ.
                </p>

                <p className="text-sm mt-2">
                  Ask me about:
                </p>

                <ul className="text-sm mt-2 list-disc list-inside">
                  <li>Service times</li>
                  <li>Location</li>
                  <li>Livestreams</li>
                  <li>Donations</li>
                  <li>Contact information</li>
                </ul>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-border p-3"
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about the church..."
                className="flex-1 px-3 py-2 border border-border rounded-lg text-sm"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-primary text-primary-foreground p-2 rounded-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}