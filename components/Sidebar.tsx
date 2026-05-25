'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, MessageSquare, Bookmark, PlusCircle } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/jobs', label: 'Find Work', icon: Briefcase },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '#', label: 'Saved Jobs', icon: Bookmark },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-white border-r flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">S</div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">SkillForge</h1>
        </div>
      </div>

      <div className="px-6 mb-6">
        <Link
          href="/jobs"
          className="flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-3xl font-medium transition-all active:scale-95"
        >
          <PlusCircle size={22} />
          Post a New Job
        </Link>
      </div>

      <nav className="px-3 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3.5 mx-3 rounded-2xl text-sm mb-1 transition-all ${active ? 'bg-neutral-100 text-primary-600 font-semibold' : 'hover:bg-neutral-100 text-neutral-600'}`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t mt-auto">
        <div className="text-xs text-neutral-500 px-6 mb-2">ACCOUNT</div>
        <div className="px-6 py-3 hover:bg-neutral-100 rounded-2xl cursor-pointer flex items-center gap-3 text-sm">
          Settings
        </div>
      </div>
    </div>
  );
}