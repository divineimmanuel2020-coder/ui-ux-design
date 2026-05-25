import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'SkillForge - Freelance Marketplace',
  description: 'Hire top talent or find your next opportunity',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <div className="flex flex-col h-screen overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}