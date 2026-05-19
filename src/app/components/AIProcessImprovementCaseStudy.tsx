import { motion } from 'motion/react';

const prototypingLevels = [
  {
    title: 'Concept Validation',
    desc: 'AI-generated screens, flows, and early UI concepts let teams explore multiple directions in minutes and decide whether an idea is worth pursuing.',
  },
  {
    title: 'Click-Through Validation',
    desc: 'Interactive prototypes test workflows, usability, and interaction logic with stakeholders and users before engineering investment.',
  },
  {
    title: 'Production-Ready Prototyping',
    desc: 'AI-assisted workflows, supported by Design System tokens and MCP-enabled structured context, generate reusable front-end components and working code that directly inform implementation.',
  },
];

const designSystemValue = [
  { title: 'Structured Context', desc: 'Design decisions live in machine-readable structure, not only in documents' },
  { title: 'AI Works From Source', desc: 'AI tools consume the actual Design System rather than generic prompts or disconnected specs' },
  { title: 'System-Aligned Generation', desc: 'Component output stays consistent with approved tokens, patterns, and constraints' },
  { title: 'Single Source of Truth', desc: 'A context-aware backbone that supports both design and code' },
  { title: 'UX in the Delivery Loop', desc: 'UX accelerates execution, not only defining experience direction' },
];

export default function AIProcessImprovementCaseStudy() {
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
            AI · Process Improvement · Delivery
          </span>
          <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-slate-900">
            AI Process Improvement
          </h3>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            Reframing how UX, AI, and the Design System accelerate delivery
          </p>

          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Two efforts illustrate how I use AI to compress the gap between intent and execution:
              treating rapid prototyping as a core SDLC capability rather than a discovery side
              activity, and reimagining the Design System as an AI-enabled delivery platform rather
              than a static library of documentation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured #1: SDLC via Rapid Prototyping */}
      <section className="pt-6 pb-6 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-white">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Initiative
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Rapid Prototyping: SDLC Improvement
        </h4>
        <p className="text-lg text-purple-700 font-medium mb-6">
          Moving UX from Design Handoff to Continuous Learning and Faster Product Delivery
        </p>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            In parallel, I helped shape an AI-enabled Rapid Prototyping strategy that reimagines
            how UX contributes to product development—shifting the organization from a traditional{' '}
            <span className="font-semibold text-slate-900">Design → Build → Validate</span>{' '}
            process, where learning often occurs late, to a more iterative{' '}
            <span className="font-semibold text-slate-900">Build → Learn → Harden</span> model
            that brings validation forward and reduces the cost of getting direction wrong.
          </p>
          <p>
            Rather than treating prototyping as a single activity, we established a multi-level
            approach aligned to different decision needs. Together, these approaches create a
            continuous pipeline from{' '}
            <span className="italic">idea → interaction → implementation</span>—shortening
            feedback loops, reducing design-to-build rework, enabling earlier research and
            decision-making, and helping teams move faster without sacrificing usability,
            accessibility, or system alignment.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">A Multi-Level Prototyping Approach</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prototypingLevels.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-100"
              >
                <div className="text-xs font-semibold text-purple-600 mb-2">Level {i + 1}</div>
                <h6 className="mb-2 font-semibold text-slate-900 text-sm">{c.title}</h6>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-5 text-slate-700 leading-relaxed">
          <p>
            This evolving model positions UX not only as a function that defines experiences, but
            as an AI-enabled delivery partner that accelerates innovation and helps bring
            product-ready solutions to market with greater confidence.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {['Rapid Prototyping', 'AI-Assisted Design', 'Build → Learn → Harden', 'Continuous Validation', 'Delivery Strategy'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured #2: Design System AI Automation at McKesson */}
      <section className="pt-6 pb-16 px-6 md:px-16">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-4">
          Featured Initiative
        </span>
        <h4 className="mb-3 text-xl md:text-2xl font-semibold text-slate-900">
          Design System: AI Automation at McKesson
        </h4>
        <p className="text-lg text-purple-700 font-medium mb-6">
          Reimagining the Design System as an AI-Enabled Delivery Platform
        </p>

        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            At McKesson, I provided strategic direction for a Design System automation initiative
            at a point when the effort had reached a practical dead end. The organization had
            already invested in the traditional foundations of a Design System—Figma libraries,
            component specifications, documentation, and supporting repositories—but the model
            still relied heavily on manual interpretation between design and engineering. Despite
            the quality of the assets, the system was not scaling in a way that meaningfully
            reduced delivery friction: documentation could become outdated, implementation still
            required translation, multiple sources of truth created drift, and the path from
            design intent to production remained slower and more fragmented than needed.
          </p>
          <p>
            I helped reframe the initiative from <span className="italic">"How do we create
            better Design System documentation?"</span> to <span className="italic">"How do we
            make the Design System directly usable by AI as structured execution context?"</span>{' '}
            This strategic shift opened a new path forward. Instead of treating the Design System
            as a static library of human-readable specifications, we began reimagining it as a
            machine-readable, AI-enabled platform powered by an MCP layer that can expose Figma
            components, design tokens, variants, layout rules, and constraints directly to AI
            tools. This creates the potential for design intent to move into execution with far
            less ambiguity, enabling AI-assisted workflows to generate system-aligned components
            and reduce the traditional handoff gap between UX and engineering.
          </p>
          <p>
            The value of this direction is not automation for automation's sake. It is about
            creating a more scalable operating model in which the Design System becomes a living
            backbone for consistency, speed, and implementation quality.
          </p>
        </div>

        <div className="mt-10">
          <h5 className="mb-6 font-semibold text-slate-900">What the New Model Enables</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {designSystemValue.map((c, i) => (
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

        <div className="mt-10 space-y-5 text-slate-700 leading-relaxed">
          <p>
            This initiative is still evolving, but the strategic reframe helped move the effort
            beyond a stalled documentation-centered approach toward a more future-ready model—one
            that positions the Design System as an AI-enabled platform for stronger
            design-to-engineering alignment, faster product execution, and more scalable
            experience consistency.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {['Design System', 'AI Automation', 'MCP', 'Design-to-Code', 'Platform Strategy'].map((tag) => (
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
