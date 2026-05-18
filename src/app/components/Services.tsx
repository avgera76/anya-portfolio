import { motion } from 'motion/react';
import {
  BarChart3,
  Layers,
  Zap,
  Sparkles,
  Database,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../data/content';

const icons: LucideIcon[] = [BarChart3, Layers, Zap, Sparkles, Database, Users];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-slate-900">What I Do</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Six core capabilities that drive results—from strategy to execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-4 font-medium">{service.tagline}</p>
                <p className="text-slate-700 text-sm mb-4">{service.description}</p>
                <ul className="text-sm space-y-2 text-slate-700">
                  {service.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
