import { motion } from 'motion/react';
import ecosystemMapsImg from '../../imports/Screenshot_2026-05-02_at_4.00.21 PM.png';
import participatoryDesignImg from '../../imports/Screenshot_2026-05-02_at_4.00.37 PM.png';
import storyboardsImg from '../../imports/Screenshot_2026-05-02_at_4.00.45 PM.png';

const ecosystemFocus = [
  { title: 'Parts Forecasting', desc: 'How GE Aviation predicts parts demand for active aircraft' },
  { title: 'Vendor & Service Network', desc: 'Third-party ecosystem feeding the forecasting algorithm' },
  { title: 'User Touchpoints', desc: 'Which users are supported at each step of the business flow' },
  { title: 'Settlement Intervention', desc: 'Where the digital settlement process needs to step in' },
];

const workshopOutcomes = [
  { title: 'Persona Priorities', desc: 'A clear read on what matters to each persona' },
  { title: 'Cross-Group Alignment', desc: 'Five groups working from a shared set of objectives' },
  { title: 'Maintenance Planning Goals', desc: 'Key objectives for GE\'s streamlined maintenance planning process' },
  { title: 'Service-Design Framework', desc: 'Workshop outputs translated into an actionable framework' },
];

const lowFiArtifacts = [
  { title: 'Storyboards', desc: 'Narrative sequences that anchor user flows in context' },
  { title: 'Use Cases', desc: 'Concrete scenarios paired with the storyboards to clarify intent' },
  { title: 'Low-Fidelity Wireframes', desc: 'Quick screen sketches that visualize the flow end-to-end' },
];

export default function ServiceDesignDiscoveryCaseStudy() {
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
            Aviation · Service Design · Discovery
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Service Design & Discovery Workshops
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            From ecosystem mapping to participatory design to low-fidelity validation
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Upstream of any product surface, GE Aviation's services business needed a shared
              understanding of how parts forecasting, vendor networks, and maintenance planning
              actually fit together—and where digital tooling could intervene. Three discovery
              activities anchored that work: ecosystem maps and task analysis, participatory design
              workshops across five stakeholder groups, and storyboards paired with low-fidelity
              wireframes to validate flows before committing to high-fidelity design.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Ecosystem Maps & Task Analysis */}
      <section className="pt-6 pb-6 px-6 md:px-16">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Research & Analysis
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Ecosystem Maps & Task Analysis
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Mapped how GE Aviation predicts parts demand for active aircraft, and traced the
            third-party vendor and service network that feeds the forecasting algorithm. The
            resulting view clarified which users would be supported at each step of the business
            flow and where the digital settlement process needed to intervene.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What the Map Surfaced</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemFocus.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-100"
              >
                <h6 className="mb-2 font-semibold text-slate-900 text-sm">{c.title}</h6>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem screenshot */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={ecosystemMapsImg}
            alt="Ecosystem maps and task analysis"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Task Analysis', 'User Workflows', 'Ecosystem Mapping'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Participatory Design & Mind Mapping */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Workshops
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Participatory Design & Mind Mapping
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Participatory design gives the team the clearest read on what matters to each persona.
            Working across five groups, I facilitated workshops that surfaced key objectives for
            GE's streamlined maintenance planning process and translated them into a service-design
            framework.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What the Workshops Produced</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workshopOutcomes.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-100"
              >
                <h6 className="mb-2 font-semibold text-slate-900 text-sm">{c.title}</h6>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participatory design screenshot */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={participatoryDesignImg}
            alt="Participatory design and mind mapping workshops"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Participatory Design', 'Mind Mapping', 'Workshop Facilitation'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Storyboards, Use Cases & Low-Fi Wireframes */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Validation
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Storyboards, Use Cases & Low-Fidelity Wireframes
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Paired storyboards and use cases with low-fidelity wireframes to visualize user flows
            and validate concepts before investing in high-fidelity prototypes.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">Artifacts in This Phase</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lowFiArtifacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-100"
              >
                <h6 className="mb-2 font-semibold text-slate-900 text-sm">{c.title}</h6>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storyboards screenshot */}
      <section className="pt-6 pb-16 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={storyboardsImg}
            alt="Storyboards, use cases, and low-fidelity wireframes"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Storyboards', 'Use Cases', 'Low-Fidelity Wireframes'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
