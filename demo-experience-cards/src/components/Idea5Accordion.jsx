import { useState } from 'react'
import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea5Accordion({ experience }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl bg-white shadow-card border border-highlight/20 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-highlight/10 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-10 h-10" />
          <div className="min-w-0">
            <h3 className="font-semibold text-text text-sm">{experience.title}</h3>
            <span className="text-secondary text-xs">{experience.company}</span>
          </div>
        </div>
        <span className="text-secondary text-sm shrink-0">{experience.duration}</span>
        <svg
          className={`w-5 h-5 text-accent shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 border-t border-highlight/20">
          <a
            href={experience.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-jacket text-sm font-medium"
          >
            {experience.company}
          </a>
          <div className="text-secondary text-sm mt-0.5">{experience.location}</div>
          <ul className="mt-3 space-y-1 text-secondary text-sm list-disc list-inside">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
