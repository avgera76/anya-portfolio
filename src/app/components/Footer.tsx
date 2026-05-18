import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4 font-semibold">Anya Gerasimchuk</h3>
            <p className="text-sm">UX, Product & AI Innovation Consulting</p>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold">Services</h3>
            <ul className="text-sm space-y-2">
              <li>Product Strategy & Vision</li>
              <li>UX & Experience Design</li>
              <li>AI & Innovation Integration</li>
              <li>Team Enablement & Leadership</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:avgera@hotmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© 2026 Anya Gerasimchuk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
