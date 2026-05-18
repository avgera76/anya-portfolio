import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import image1 from '../../imports/Screenshot_2026-05-15_at_3.04.29_PM.png';
import image2 from '../../imports/Screenshot_2026-05-15_at_3.04.38_PM.png';
import image3 from '../../imports/Screenshot_2026-05-15_at_3.04.50_PM.png';
import image4 from '../../imports/Screenshot_2026-05-15_at_3.05.03_PM.png';
import image5 from '../../imports/Screenshot_2026-05-15_at_3.05.10_PM.png';
import image6 from '../../imports/Screenshot_2026-05-15_at_3.05.17_PM.png';
import image7 from '../../imports/Screenshot_2026-05-15_at_3.05.28_PM.png';
import image8 from '../../imports/Screenshot_2026-05-15_at_3.05.38_PM.png';
import image9 from '../../imports/Screenshot_2026-05-15_at_3.05.46_PM.png';

const responsibilities = [
  {
    title: 'Existing & Ideal Workflow Definition',
    body: 'Defined end-to-end care-management journeys connecting eligibility, enrollment, ePROs, triage, and documentation',
  },
  {
    title: 'Requirements Clarification',
    body: 'Decomposed complex needs into actionable requirements aligned with delivery capabilities',
  },
  {
    title: 'Dependency Mapping',
    body: 'Identified critical dependencies: platform embedding, data exchange, SSO, and reporting',
  },
  {
    title: 'Phasing Strategy',
    body: 'Distinguished MVP from post-MVP scope to enable realistic delivery planning',
  },
];

const strategicOutcomes = [
  'Transformed ambiguous opportunity into structured program',
  'Created shared language across stakeholder groups',
  'Enabled informed strategic decision-making',
  'Defined scalable care-management model',
];

const competencies = [
  'Discovery leadership in complex environments',
  'Program orchestration and management',
  'Systems thinking and requirements synthesis',
  'Cross-functional stakeholder alignment',
];

const lifecycle = [
  { phase: 'Eligibility & Enrollment', desc: 'Patient identification, consent capture, program onboarding' },
  { phase: 'Patient Engagement', desc: 'Education delivery, symptom tracking, ePRO collection' },
  { phase: 'Care Team Triage', desc: 'Alert management, prioritization, intervention planning' },
  { phase: 'Care Planning & Documentation', desc: 'Treatment coordination, clinical notes, care plan updates' },
  { phase: 'Billing & Reporting', desc: 'Time tracking, reimbursement documentation, outcome measurement' },
];

const artifacts = [
  { img: image1, title: 'Initiating Remote Care' },
  { img: image2, title: 'Back-office mechanics' },
  {/* 
  { img: image3, title: 'Workflow Mapping' },
  { img: image4, title: 'Requirements Definition' },
  { img: image5, title: 'Program Structure' },
  { img: image6, title: 'Integration Planning' },
  { img: image7, title: 'Care Team Workflows' },
  { img: image8, title: 'Patient Journey' },
  { img: image9, title: 'Technical Architecture' },
   Hero */}
];

export default function RemoteCareCaseStudy() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      {/* Hero */}
      <section className="pt-16 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            Healthcare · Enterprise UX
          </span>
          <h3 className="mb-6 text-2xl md:text-3xl font-semibold text-slate-900">
            Remote Care Management: Enterprise Healthcare Transformation
          </h3>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
            Remote Care Management in oncology uses ongoing digital monitoring and coordinated care support to identify patient needs earlier, with ePROs enabling patients to report symptoms between visits so care teams can intervene proactively before issues escalate into emergency visits or avoidable hospitalizations.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
            At McKesson Ontada, we identified the need to incorporate Remote Care Management into our Patient Portal and EHR applications to enable more robust, continuous care between nurses and patients, using ePROs and proactive symptom monitoring and patient Education to surface concerns earlier, support timely intervention, and help reduce avoidable hospitalizations.
              
            </p>
           
            I executed the Remote Care Management program by leading discovery and requirements definition across our Patient Portal, EHR, and vendor platforms. I translated manual CCM/PCM workflows into scalable, system‑level designs, collaborated closely with clinical, billing, and engineering stakeholders, and ensured vendor integrations aligned with real clinical and reimbursement constraints. Her work anchored UX as a core driver of program feasibility, not a downstream design activity.

        </motion.div>
      </section>

      {/* Program Orchestration */}
      <section className="pt-6 pb-6 px-6 md:px-16">
 {/*
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 mb-8">
          <p className="text-slate-800 leading-relaxed">
            <span className="font-semibold">Strategic Impact:</span> The design work was not
            downstream of the program. UX actively shaped the program by defining workflows,
            clarifying requirements, aligning stakeholders, and reducing decision risk.
            
        
          </p>
        </div>
*/}
        <div className="rounded-xl p-8 bg-slate-50">
          <h5 className="mb-6 text-lg font-semibold text-slate-900">Key Program Responsibilities</h5>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h6 className="mb-3 font-semibold text-slate-900">{r.title}</h6>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Competencies */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="mb-4 text-lg font-semibold text-purple-700">Strategic Outcomes</h4>
            <ul className="space-y-3">
              {strategicOutcomes.map((o) => (
                <li key={o} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-slate-700 leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="mb-4 text-lg font-semibold text-purple-700">Competencies Demonstrated</h4>
            <ul className="space-y-3">
              {competencies.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-slate-700 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="pt-6 pb-6 px-6 md:px-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h4 className="mb-8 text-lg font-semibold text-slate-900">Care Management Lifecycle: Scope of the Initiative</h4>
          <div className="relative">
            <div
              className="hidden md:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-purple-100"
              aria-hidden
            />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
              {lifecycle.map((item, i) => (
                <div
                  key={item.phase}
                  className="flex md:flex-col gap-3 md:items-center md:text-center"
                >
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold relative z-10 md:ring-4 md:ring-white">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1 text-sm">{item.phase}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts */}
      <section className="pt-6 pb-16 px-6 md:px-16 bg-slate-50">
        
        <div className="grid md:grid-cols-2 gap-8">
          {artifacts.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={a.img} alt={a.title} className="w-full h-auto" />
              <div className="p-4 border-t border-slate-100">
                <h5 className="text-slate-800 font-medium">{a.title}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
