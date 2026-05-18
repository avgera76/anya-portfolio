import { motion } from 'motion/react';
import portrait from '../../imports/anya-portrait.png';
import speaking from '../../imports/anya-speaking.png';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '4', label: 'Fortune 500 Companies' },
  { value: '3', label: 'Industries Transformed' },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <img
              src={portrait}
              alt="Anya Gerasimchuk"
              className="w-48 md:w-56 rounded-xl shadow-md object-cover justify-self-center"
            />
            <div>
              <h1 className="mb-4 text-4xl md:text-5xl font-semibold text-slate-900">
                Anya Gerasimchuk
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 mb-6">
                UX, Product & AI Innovation Consulting
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                I help organizations turn complex ideas into clear, scalable products by combining
                UX design, product strategy, and AI-driven innovation. From early concept to
                product-ready execution, I focus on speed, clarity, and measurable outcomes.
              </p>
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
              <div>
                <p className="text-slate-700 leading-relaxed">
                  As a conference speaker, C-suite roundtable participant, and thought leader, I
                  help organizations translate emerging industry trends—including AI—into
                  outcome-driven product strategies and team-level best practices, drawing on deep
                  experience building and scaling UX organizations across{' '}
                  <span className="font-semibold text-slate-900">
                    McKesson, GE Digital, EY, GE Aviation
                  </span>{' '}
                  and others. My differentiator is to combine human-centered design with proven methodologies such as
                  Design Thinking, iDNA, Jobs to Be Done, Continuous Discovery, and Outcomes-Driven
                  Product Management to accelerate high-tech, high-quality, product-ready innovation in
                  complex, regulated environment.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{s.value}</div>
                      <div className="text-sm text-slate-600">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={speaking}
                alt="Anya Gerasimchuk speaking"
                className="w-48 md:w-56 rounded-xl shadow-md object-cover justify-self-center"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo('services')}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-lg font-medium"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
