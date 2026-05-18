import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-slate-900">
          Let's Work Together
        </h2>
        <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          If you're building, scaling, or rethinking a product—and need clarity, speed, and strong
          execution—I can help.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:avgera@hotmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            <Mail size={22} />
            Start a Conversation
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            <Linkedin size={22} />
            Connect on LinkedIn
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-slate-700 text-sm leading-relaxed">
            Available for strategic consulting engagements, product leadership roles, and advisory
            work with organizations tackling complex product challenges in healthcare, enterprise
            software, and regulated industries.
          </p>
        </div>
      </div>
    </section>
  );
}
