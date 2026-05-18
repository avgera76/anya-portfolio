import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Approach' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-xl text-slate-900">Anya Gerasimchuk</div>

          <div className="hidden md:flex space-x-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="block w-full text-left text-slate-700 hover:text-purple-600 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
