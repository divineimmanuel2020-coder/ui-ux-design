'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

const chats = [
  { id: 1, name: "Alex Rivera", role: "Webflow Developer", last: "The animations look amazing!", time: "2m" },
  { id: 2, name: "Maya Chen", role: "Brand Strategist", last: "Should we go with teal?", time: "1h" },
];

export default function Messages() {
  const [active, setActive] = useState(1);

  return (
    <div className="flex h-full">
      <div className="w-96 border-r bg-white">
        <div className="p-8 border-b">
          <h2 className="text-3xl font-semibold">Messages</h2>
        </div>
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => setActive(chat.id)}
            className={`p-6 border-b cursor-pointer hover:bg-neutral-50 ${active === chat.id ? 'bg-neutral-50' : ''}`}
          >
            <div className="font-medium">{chat.name}</div>
            <div className="text-sm text-neutral-500">{chat.role}</div>
            <div className="text-sm mt-2 line-clamp-1 text-neutral-600">{chat.last}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-20 border-b px-8 flex items-center">
          <div>
            <p className="font-medium">Alex Rivera</p>
            <p className="text-emerald-500 text-sm">Online</p>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto bg-neutral-50 space-y-6">
          <div className="max-w-md ml-auto bg-primary-600 text-white p-5 rounded-3xl rounded-tr-none">Can we make the hero section bolder?</div>
          <div className="max-w-md bg-white p-5 rounded-3xl rounded-tl-none">Absolutely! I'll increase the typography weight and add more contrast.</div>
        </div>

        <div className="p-6 bg-white border-t">
          <div className="flex gap-3 bg-neutral-100 rounded-3xl p-2">
            <input type="text" placeholder="Write a message..." className="flex-1 bg-transparent px-6 outline-none" />
            <button className="bg-primary-600 text-white p-4 rounded-2xl">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}