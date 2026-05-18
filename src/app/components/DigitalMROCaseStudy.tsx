import { motion } from 'motion/react';
import workscopingImg from '../../imports/Screenshot_2026-05-02_at_4.01.20 PM.png';
import geolifeImg from '../../imports/Screenshot_2026-05-02_at_4.01.12 PM.png';

const workscopingInputs = [
  { title: 'Repair History', desc: 'Past repair records and prior scoping decisions' },
  { title: 'Maintenance Records', desc: 'Service intervals and component lifecycle data' },
  { title: 'Engine Condition', desc: 'Current physical state and inspection findings' },
  { title: 'Compliance Requirements', desc: 'Regulatory rules and certification tracking' },
  { title: 'Prior Approvals', desc: 'Sign-offs and authorization history' },
  { title: 'Parts Needs', desc: 'Material requirements and procurement signals' },
  { title: 'Customer Commitments', desc: 'Service agreements and delivery expectations' },
];

const geolifeInsights = [
  { title: 'Upcoming Shop Slots', desc: 'Future windows of repair capacity across the network' },
  { title: 'Capacity Changes', desc: 'Shifts in available bandwidth by shop and location' },
  { title: 'Scheduling Tradeoffs', desc: 'Comparing options across shops and timing windows' },
  { title: 'Repair Timing', desc: 'Estimated start and completion ranges per slot' },
];

export default function DigitalMROCaseStudy() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      {/* Hero — what Digital MRO is */}
      <section className="pt-16 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            Aviation · Enterprise Platform · MRO
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Digital MRO at GE Aviation
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            Making Engine Repair More Predictable, Connected, and Operationally Intelligent
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Digital MRO—Maintenance, Repair, and Overhaul—is the modernization of complex
              aviation service operations through connected data, workflow visibility, and
              decision-support tools that help repair shops, airlines, and service teams plan
              engine maintenance more accurately, manage capacity more effectively, and return
              aircraft to service faster.
            </p>
            <p>
              In a global MRO environment where repair-shop capacity, parts availability,
              compliance requirements, and airline operating schedules are tightly interdependent,
              digital platforms are essential for reducing uncertainty and improving turnaround
              planning.
            </p>
          </div>
        </motion.div>
      </section>

      {/* GE Aviation's Digital MRO Program */}
      <section className="pt-6 pb-6 px-6 md:px-16">
        <h4 className="mb-4 text-xl font-semibold text-slate-900">
          GE Aviation's Digital MRO Program
        </h4>
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            At GE Aviation, the Digital MRO program focused on transforming historically
            fragmented, manual, and system-separated service workflows into a more integrated
            operating model across the repair lifecycle.
          </p>
          <p>
            <span className="font-semibold text-slate-900">Parts Forecasting</span> strengthened
            this ecosystem by using expected repair demand, workscoping signals, and shop capacity
            plans to anticipate material needs earlier, helping reduce parts-related delays,
            improve inventory readiness, and support more reliable engine turnaround times.
          </p>
          <p className="text-slate-500 text-sm italic">
            Two applications—Workscoping and Capacity Planning (Slot Tracker) featured below as anchors of the program.
          </p>
        </div>
      </section>

      {/* Featured #1: Workscoping */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Application
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Workscoping — At the Heart of Services Execution
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Workscoping sat at the heart of GE Aviation's services business. Before an engine
            enters repair, service teams must determine the precise scope of work required by
            reviewing repair history, maintenance records, engine condition, compliance
            requirements, prior approvals, parts needs, and customer commitments.
          </p>
          <p>
            The workscoping application brought these inputs into a more unified digital
            experience, helping shops make faster, more informed decisions about what work was
            needed, what materials and approvals were required, and how the job could move
            efficiently from evaluation through execution. Because workscoping directly influences
            cost, turnaround time, parts planning, and service quality, it became a foundational
            capability within the broader Digital MRO vision.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What Workscoping Brings Together</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workscopingInputs.map((c, i) => (
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

      {/* Workscoping screenshot */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-slate-50">
        <h5 className="mb-6 text-lg font-semibold text-slate-900 text-center">
          Workscoping Platform
        </h5>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={workscopingImg}
            alt="GE Aviation Workscoping Platform"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Enterprise Application', 'Workflow Design', 'Data Aggregation'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured #2: SlotTracker */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Application
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Slot Tracker / Capacity Planning — Maintenance, Repair & Overhaul (MRO)
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Slot Tracker / Capacity Planning  addressed the upstream planning challenge: MRO shops worldwide face constant
            capacity and availability pressure, making it difficult for airlines to anticipate
            repair windows and align engine removals with fleet needs.
          </p>
          <p>
            By connecting data flowing across separate systems, Slot Tracker / Capacity Planning  provided greater visibility
            into upcoming shop slots, capacity changes, scheduling tradeoffs, and repair
            timing—helping keep engine availability better aligned with airline operations.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What Slot Tracker / Capacity Planning Surfaces</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {geolifeInsights.map((c, i) => (
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

      {/* GeoLife screenshot */}
      <section className="pt-6 pb-16 px-6 md:px-16 bg-slate-50">
        <h5 className="mb-6 text-lg font-semibold text-slate-900 text-center">
          Slot Tracker / Capacity Planning Application
        </h5>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img src={geolifeImg} alt="Slot Tracker MRO Application" className="w-full h-auto" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Mobile Design', 'Responsive Design', 'Scheduling Systems'].map((tag) => (
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
