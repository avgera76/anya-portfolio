import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { processSteps, differentiators, engagementModels } from '../data/content';

export default function Approach() {
  return (
    <section id="approach" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* How I Work */}
          <div className="mb-20">
            <h2 className="mb-6 text-center text-3xl md:text-4xl font-semibold text-slate-900">
              How I Work
            </h2>
            <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
              My approach is structured but fast-moving
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {processSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="px-5 py-3 bg-purple-600 text-white rounded-lg font-medium">
                      {step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <ChevronRight className="text-slate-400" size={20} />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-slate-700 text-center text-lg leading-relaxed">
                I combine systems thinking, rapid iteration, and AI-enabled workflows to reduce
                time-to-insight and accelerate product readiness—without sacrificing depth.
              </p>
            </div>
          </div>

          {/* Differentiators */}
          <div className="mb-20">
            <h2 className="mb-12 text-center text-3xl md:text-4xl font-semibold text-slate-900">
              What Makes This Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="bg-white p-6 rounded-lg shadow-md border border-slate-100"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600">{d.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Models */}
          <div>
            <h2 className="mb-12 text-center text-3xl md:text-4xl font-semibold text-slate-900">
              Engagement Models
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {engagementModels.map((m) => (
                <div
                  key={m.title}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{m.title}</h3>
                  <p className="text-sm text-slate-600">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
