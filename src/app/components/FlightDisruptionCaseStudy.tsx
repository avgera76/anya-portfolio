import { motion } from 'motion/react';
import flightDisruptionImg from '../../imports/Screenshot_2026-05-02_at_4.01.04 PM.png';
import conceptualWireframesImg from '../../imports/Screenshot_2026-05-02_at_4.00.56 PM.png';
import usabilityStudyImg from '../../imports/Screenshot_2026-05-02_at_4.01.27 PM.png';

const wireframeFocus = [
  { title: 'Duty Manager Flow', desc: 'Solution directions for assessing flight information quickly under uncertainty' },
  { title: 'Early Signal Detection', desc: 'Screens that surface emerging issues before they escalate' },
  { title: 'Decision Confidence', desc: 'Supporting faster, more confident operational choices' },
];

const usabilityMeasures = [
  { title: 'Learnability', desc: 'How quickly novice operators reach productive use' },
  { title: 'Efficiency', desc: 'Speed and effort required for experienced operators to complete tasks' },
  { title: 'Memorability', desc: 'Ease of returning to the tool after time away' },
  { title: 'Acceptance Criteria', desc: 'Concrete validation thresholds handed off to development' },
];

export default function FlightDisruptionCaseStudy() {
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
            Aviation · Operations · Data Visualization
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Flight Disruption Management
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            Surfacing emerging issues across an airline's network and fleet
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              The application surfaces flight data and status across an airline's network and fleet
              so operations teams can spot issues before they become active disruptions. Built-in
              analytics make it easier to act on emerging signals and prevent the same problem from
              recurring downstream.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main app screenshot */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={flightDisruptionImg}
            alt="Flight Disruption Management dashboard"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Heuristic Evaluation', 'Usability Testing', 'Data Visualization'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Conceptual Wireframes */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Design Exploration
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Conceptual Wireframes
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Conceptual wireframes explored multiple solution directions for the Duty Manager flow,
            where flight information must be assessed quickly under uncertainty. The screens
            emphasized early signal detection to support faster, more confident decisions.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">Where the Wireframes Focused</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wireframeFocus.map((c, i) => (
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

      {/* Wireframes screenshot */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={conceptualWireframesImg}
            alt="Conceptual wireframes for the Duty Manager flow"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Wireframes', 'User Flows', 'Information Architecture'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Usability Study */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Validation
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Usability Study
        </h4>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            Observed how operators interact with the application during day-to-day tasks. The study
            measured learnability, efficiency, and memorability against key features and validated
            whether the design was intuitive enough for both novice and expert users—producing
            concrete acceptance criteria for development.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What the Study Measured</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usabilityMeasures.map((c, i) => (
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

      {/* Usability screenshot */}
      <section className="pt-6 pb-16 px-6 md:px-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={usabilityStudyImg}
            alt="Usability study findings"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['Usability Testing', 'User Testing', 'Acceptance Criteria'].map((tag) => (
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
