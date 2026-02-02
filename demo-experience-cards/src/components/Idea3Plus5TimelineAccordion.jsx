import { useState } from 'react'
import { LogoPlaceholder } from './LogoPlaceholder'

function TimelineAccordionItem({ experience, isLast }) {
  const [open, setOpen] = useState(false)
  const hasDescription = experience.description && experience.description.length > 0

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full border-2 border-accent bg-body shrink-0 z-10" />
        {!isLast && <div className="w-0.5 flex-1 min-h-[32px] bg-accent/50 mt-1" />}
      </div>
      <div className="pb-4 flex-1 min-w-0">
        <div className="rounded-xl bg-white shadow-card border border-highlight/20 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-highlight/10 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-10 h-10" />
              <div className="min-w-0">
                <h3 className="font-semibold text-text text-base">{experience.title}</h3>
                <a
                  href={experience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-jacket text-sm font-medium block truncate"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.company}
                </a>
                <div className="text-secondary text-sm mt-0.5">
                  {experience.duration} · {experience.location}
                </div>
              </div>
            </div>
            {hasDescription && (
              <svg
                className={`w-5 h-5 text-accent shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
          {open && hasDescription && (
            <div className="px-4 pb-4 pt-0 border-t border-highlight/20">
              <ul className="mt-3 space-y-1.5 text-secondary text-sm list-disc list-inside">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Idea3Plus5TimelineAccordion({ sections }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.id}>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-text">{section.title}</h2>
            {section.subtitle && (
              <p className="text-secondary text-sm mt-0.5">{section.subtitle}</p>
            )}
          </div>
          <div className="space-y-0">
            {section.experiences.map((exp, i) => (
              <TimelineAccordionItem
                key={i}
                experience={exp}
                isLast={i === section.experiences.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
