import { motion } from 'motion/react';
import schedulingPersonas from '../../imports/scheduling-personas.png';

const infusionPainPoints = [
  {
    title: 'Manual Transcription Risk',
    desc: 'Nurses moved order details from iKnowMed or the MAR into the pump manually, creating opportunities for human error during high-risk medication administration.',
  },
  {
    title: 'Disconnected Systems',
    desc: 'The pump and EHR operated separately, with limited visibility into connection status, data receipt, or synchronization back into the clinical record.',
  },
  {
    title: 'Reconciliation Gaps',
    desc: 'Clinical adjustments at the pump could create inconsistencies with the EHR or MAR when updates were delayed, missed, or manually refreshed.',
  },
  {
    title: 'Cognitive Load on Nurses',
    desc: 'Infusion nurses carried medication safety, patient monitoring, device programming, and documentation across fragmented systems.',
  },
];

const schedulingPainPoints = [
  {
    title: 'Separate RTC Instructional Orders',
    desc: 'Providers had to create separate orders to explain how regimen-related appointments should be scheduled, often leading to incomplete or out-of-system instructions.',
  },
  {
    title: 'Schedulers Assemble the Puzzle',
    desc: 'Order details, infusion length, timing, location, authorization, provider instructions, and patient constraints lived across multiple systems.',
  },
  {
    title: 'Authorization Friction',
    desc: 'Insurance authorizations were manually communicated and entered into the practice management system, with single-cycle approvals creating downstream rework.',
  },
  {
    title: 'Limited Shared Visibility',
    desc: 'Providers and schedulers lacked shared visibility into future appointments, radiation schedules, and changes that affected oncology treatment timing.',
  },
  {
    title: 'Manual Rescheduling',
    desc: 'Cascading appointments had to be moved one by one across systems, leading to out-of-sync dates, billing issues, and duplicated work.',
  },
];

const schedulingOpportunities = [
  {
    title: 'Consolidated Regimen Ordering',
    desc: 'Combine treatment orders with scheduling instructions to reduce the need for separate RTC orders.',
  },
  {
    title: 'Suggested Appointment Logic',
    desc: 'Generate appointment suggestions from regimen orders, clinical timing rules, infusion duration, and provider instructions.',
  },
  {
    title: 'Future Appointment Visibility',
    desc: 'Surface scheduled and changed appointments in the patient banner and flowsheet so providers can see the plan at a glance.',
  },
  {
    title: 'Integrated Scheduling Data',
    desc: 'Connect iKnowMed, practice management, radiation scheduling, and authorization tools to reduce manual reconciliation.',
  },
  {
    title: 'Cascading Rescheduling',
    desc: 'Allow related appointments to move together rather than requiring schedulers to update each item individually.',
  },
  {
    title: 'Date-Focused Order Queues',
    desc: 'Give schedulers actionable queues structured around what needs to be scheduled next.',
  },
];

export default function OncologyJourneyCaseStudy() {
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
            Healthcare · Oncology · Workflow Design
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            Gradual Improvements Across the Patient Journey in Oncology
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            Connecting fragmented clinical workflows into a safer, more coordinated experience
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Two efforts at Ontada illustrate how targeted UX discovery can reframe technical
              initiatives as broader workflow and patient safety opportunities: integrating
              infusion pump hardware with the oncology EHR, and untangling the scheduling
              complexity that surrounds modern oncology care.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured #1: Infusion Pump Hardware Integration */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Initiative
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Infusion Pump Hardware Integration with EHR at Ontada
        </h4>
        <p className="text-lg text-purple-700 font-medium mb-6">
          Integrating clinical devices into the oncology care workflow
        </p>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            At Ontada, I led early UX discovery for an infusion pump integration initiative
            focused on connecting infusion pump hardware with iKnowMed, Ontada's
            oncology-specific EHR, and the Medication Administration Record workflow. The
            initial ask appeared technical: connect the infusion pump to the EHR. Through
            research, we reframed the opportunity as a broader clinical workflow and patient
            safety challenge.
          </p>
          <p>
            In oncology infusion settings, nurses manage high-risk medication administration
            across multiple systems while working under significant time pressure. Pump
            programming, medication verification, monitoring, adjustments, and documentation
            all require precision. When these steps are disconnected, nurses must manually
            transfer information between the EHR, MAR, and pump—increasing cognitive load
            and creating opportunities for dose, rate, timing, or concentration errors.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-3 font-semibold text-slate-900">My Role and Approach</h5>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              I initiated discovery through role-specific interviews with infusion nurses to
              understand how they use pumps alongside iKnowMed and the MAR during real
              clinical workflows. Rather than focusing only on the device interface, I mapped
              the full infusion ecosystem: physician order entry, medication administration,
              pump programming, infusion monitoring, exception handling, reconciliation, and
              documentation.
            </p>
            <p>
              This research surfaced that the problem was not simply usability of a pump or
              EHR screen. It was a workflow orchestration problem across hardware, software,
              clinical roles, and safety checkpoints. Nurses needed clearer connectivity,
              trustworthy data synchronization, and fewer manual steps between the order, the
              pump, and the MAR.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">Key Insights</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infusionPainPoints.map((c, i) => (
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

        <div className="mt-10">
          <h5 className="mb-3 font-semibold text-slate-900">
            Product Direction and Future-State Vision
          </h5>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              The discovery work helped define a longer-term product direction: move from
              manual pump programming toward automated, closed-loop infusion workflows. The
              future-state vision included sending order parameters from the EHR to the pump,
              synchronizing infusion data back into the MAR in near real time, validating
              against drug libraries, and giving clinicians clearer visibility into pump
              status and exceptions.
            </p>
            <p>
              This reframed the initiative from "device integration" to a strategic clinical
              capability: safer, more connected, and more auditable infusion administration.
              It also created a reusable pattern for future device integrations by grounding
              the work in human-in-the-loop safety, interoperability, and clinical workflow
              design.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white border-l-4 border-purple-600 px-6 py-4 rounded-r-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">Portfolio takeaway: </span>
            This work demonstrates my ability to lead discovery in complex clinical
            environments, translate frontline workflow pain into product requirements, and
            shape a long-term product vision that connects UX, patient safety,
            interoperability, and platform strategy.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {['Clinical Workflow', 'Device Integration', 'Patient Safety', 'Interoperability', 'EHR'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured #2: Scheduling Opportunities in Oncology Care */}
      <section className="pt-6 pb-16 px-6 md:px-16">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Initiative
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Scheduling Opportunities in Oncology Care
        </h4>
        <p className="text-lg text-purple-700 font-medium mb-6">
          Reducing scheduling complexity across oncology workflows
        </p>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            At Ontada, I led and synthesized a UX opportunity analysis focused on oncology
            ordering and scheduling workflows. The work examined how providers, schedulers,
            billing teams, and downstream systems coordinate complex appointment needs across
            iKnowMed, practice management systems, radiation scheduling, insurance
            authorization, and manual communication channels.
          </p>
          <p>
            Oncology scheduling is uniquely complex because many appointments are not
            isolated events. Chemotherapy, supportive care, labs, imaging, provider visits,
            and radiation appointments often need to occur in specific sequences or time
            windows. A single regimen may trigger a series of related appointments, each with
            clinical dependencies, authorization requirements, location constraints, and
            patient-specific needs.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-3 font-semibold text-slate-900">The Core Problem</h5>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              The patient experiences care as one connected journey, but scheduling work is
              distributed across multiple systems and roles. Providers place orders, but
              schedulers often need additional instructions to understand when, where, and
              how appointments should be scheduled. Those instructions may live in separate
              RTC orders, notes, paper, messages, verbal communication, or external systems.
            </p>
            <p>
              This creates a fragile workflow where important scheduling details can become
              disconnected from the original clinical intent. Schedulers must assemble
              information from multiple places, while providers often lack clear visibility
              into whether appointments have been scheduled, changed, or aligned with the
              treatment plan.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h5 className="mb-3 font-semibold text-slate-900">My Role and Approach</h5>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              I synthesized prior research, workflow knowledge, and stakeholder input into a
              structured opportunity analysis. The work mapped the end-to-end scheduling
              process across key steps: placing orders, setting scheduling instructions,
              obtaining insurance authorization, scheduling appointments, rescheduling
              appointments, and keeping appointment details synchronized across systems.
            </p>
            <p>
              I focused on the two primary personas most affected by the workflow: providers
              and schedulers. For each step, I identified pain points, system gaps,
              operational workarounds, and product opportunities that could reduce manual
              effort and improve visibility.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100"
        >
          <img
            src={schedulingPersonas}
            alt="Scheduling personas: Scheduler and Provider, with an ecosystem map of how they coordinate across roles"
            className="w-full h-auto"
          />
          <div className="p-4 border-t border-slate-100">
            <h6 className="text-slate-800 font-medium text-sm">
              Scheduling Personas & Ecosystem Map
            </h6>
            <p className="text-xs text-slate-600 mt-1">
              Personas for the Scheduler and Provider, paired with an ecosystem map showing
              how scheduling coordinates across providers, medical assistants, front office,
              prior auth, and the patient.
            </p>
          </div>
        </motion.div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">Key Pain Points Uncovered</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedulingPainPoints.map((c, i) => (
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

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">Product Opportunities Identified</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedulingOpportunities.map((c, i) => (
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

        <div className="mt-10 bg-white border-l-4 border-purple-600 px-6 py-4 rounded-r-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">Portfolio takeaway: </span>
            This work demonstrates my ability to analyze complex enterprise healthcare
            workflows, identify systemic operational pain, and translate fragmented user
            journeys into clear product opportunities. The outcome was not a single feature
            recommendation, but a strategic scheduling vision: connect orders, instructions,
            authorizations, appointments, and rescheduling logic into a more visible,
            coordinated, and scalable oncology workflow.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {['Scheduling', 'Workflow Analysis', 'Enterprise UX', 'Care Coordination', 'Opportunity Mapping'].map((tag) => (
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
