'use client';
import { Search, Bell, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <nav className="h-16 border-b bg-white px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs, skills, freelancers..."
            className="w-full bg-neutral-100 border border-neutral-200 pl-11 py-3 rounded-2xl text-sm focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-neutral-100 rounded-xl transition-colors">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-sky-600 rounded-2xl flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-neutral-500 -mt-0.5">Client</p>
          </div>
        </div>
      </div>
    </nav>
  );
}