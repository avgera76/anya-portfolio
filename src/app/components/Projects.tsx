import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RemoteCareCaseStudy from './RemoteCareCaseStudy';
import AIEnabledEHRCaseStudy from './AIEnabledEHRCaseStudy';
import DigitalMROCaseStudy from './DigitalMROCaseStudy';
import FlightDisruptionCaseStudy from './FlightDisruptionCaseStudy';
import ServiceDesignDiscoveryCaseStudy from './ServiceDesignDiscoveryCaseStudy';
import {
  aviationGroups,
  mckessonCases,
  type AviationProject,
  type McKessonCaseId,
} from '../data/content';

type Selection =
  | { type: 'mckesson'; id: McKessonCaseId }
  | { type: 'aviation'; id: string }
  | null;

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-purple-700 transition-colors font-medium"
    >
      <ArrowLeft size={18} />
      Back to all cases
    </button>
  );
}

type CardProps = {
  thumb: string;
  title: string;
  tagline?: string;
  shortDesc: string;
  tag?: string;
  tags?: string[];
  imageFit?: 'cover' | 'contain';
  onClick: () => void;
};

function CaseCard({ thumb, title, tagline, shortDesc, tag, tags, imageFit = 'cover', onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      <div className={`${imageFit === 'contain' ? 'aspect-[16/6]' : 'aspect-[16/10]'} overflow-hidden bg-slate-100`}>
        <img
          src={thumb}
          alt={title}
          className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-[1.02] transition-transform duration-300`}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {tag && (
          <span className="inline-block self-start px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium mb-3">
            {tag}
          </span>
        )}
        <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        {tagline && <p className="text-sm text-purple-700 font-medium mb-3">{tagline}</p>}
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{shortDesc}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t) => (
              <span key={t} className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs">
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-700">
          Read more
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </button>
  );
}

function AviationProjectDetail({ project }: { project: AviationProject }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
      <img src={project.image} alt={project.title} className="w-full" />
      <div className="p-6 md:p-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">{project.title}</h3>
        <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">{project.body}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Selection>(null);

  const aviationProject =
    selected?.type === 'aviation'
      ? aviationGroups.flatMap((g) => g.projects).find((p) => p.id === selected.id)
      : null;

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl md:text-4xl font-semibold text-slate-900">
          Selected Work
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Real-world impact across healthcare, aviation, and industrial systems
        </p>

        {selected ? (
          <motion.div
            key={`detail-${selected.type}-${selected.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BackButton onClick={() => setSelected(null)} />
            {selected.type === 'mckesson' && selected.id === 'remote-care' && <RemoteCareCaseStudy />}
            {selected.type === 'mckesson' && selected.id === 'ai-ehr' && <AIEnabledEHRCaseStudy />}
            {selected.type === 'aviation' && selected.id === 'digital-mro' && <DigitalMROCaseStudy />}
            {selected.type === 'aviation' && selected.id === 'flight-disruption' && <FlightDisruptionCaseStudy />}
            {selected.type === 'aviation' && selected.id === 'service-design-discovery' && <ServiceDesignDiscoveryCaseStudy />}
            {selected.type === 'aviation' &&
              selected.id !== 'digital-mro' &&
              selected.id !== 'flight-disruption' &&
              selected.id !== 'service-design-discovery' &&
              aviationProject && <AviationProjectDetail project={aviationProject} />}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">McKesson</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {mckessonCases.map((c) => (
                  <CaseCard
                    key={c.id}
                    thumb={c.thumb}
                    title={c.title}
                    tagline={c.tagline}
                    shortDesc={c.shortDesc}
                    tag={c.tag}
                    imageFit="contain"
                    onClick={() => setSelected({ type: 'mckesson', id: c.id })}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">GE Aviation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aviationGroups
                  .flatMap((g) => g.projects)
                  .map((p) => (
                    <CaseCard
                      key={p.id}
                      thumb={p.image}
                      title={p.title}
                      shortDesc={p.shortDesc}
                      tags={p.tags}
                      onClick={() => setSelected({ type: 'aviation', id: p.id })}
                    />
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
