import { motion } from 'motion/react';
import slideOncology from '../../imports/ehr-oncology-space.png';
import slideRequirements from '../../imports/ehr-solution-requirements.png';
import slideClinicalNoting from '../../imports/ehr-design-principles.png';
import slideAIFirstDesign from '../../imports/ehr-ai-first-design.png';


const slides = [
  { img: slideOncology, title: 'Oncology Space & Design' },
  { img: slideRequirements, title: 'Solution Requirements' },
  { img: slideClinicalNoting, title: 'AI Design Heuristics' },
  { img: slideAIFirstDesign, title: 'AI-First UX Design Framework' },
  
];

export default function AIEnabledEHRCaseStudy() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      {/* Hero */}
      <section className="pt-16 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            Healthcare · AI · Clinical Workflows
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            AI-Enabled EHR of the Future
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            From Documentation System to Clinical Intelligence Partner
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              At Ontada, we are reimagining the oncology EHR from a system that primarily records
              care into an AI-enabled clinical workspace that supports providers in the moment of
              care, reduces administrative burden, and surfaces the right insight at the right
              time.
            </p>
            <p>
              A core use case is Ambient AI-powered clinical encounters: while the physician focuses
              on the patient, the EHR listens in the background, drafts the clinical note,
              organizes relevant encounter details, and prepares downstream workflow inputs for
              clinician review—shifting the experience from manual data entry to guided
              understanding.
            </p>
            <p>
              Over time, this AI-first EHR can expand beyond documentation to support chart
              summarization, point-of-care clinical trial matching, insurance authorization
              assistance, and workflow guidance, while keeping the clinician firmly in control.
            </p>
          </div>

          <div className="mt-8 inline-block bg-white border-l-4 border-purple-600 px-6 py-4 rounded-r-lg shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-slate-900">
              AI prepares; humans decide.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Supporting Concepts */}
      <section className="pt-6 pb-16 px-6 md:px-16 bg-slate-50">
        <h4 className="mb-8 text-xl font-semibold text-slate-900 text-center">
          Key Concepts & Framing
        </h4>
        <div className="grid md:grid-cols-2 gap-8">
          {slides.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={s.img} alt={s.title} className="w-full h-auto" />
              <div className="p-4 border-t border-slate-100">
                <h5 className="text-slate-800 font-medium">{s.title}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
