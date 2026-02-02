import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea2LogoStrip({ experience }) {
  return (
    <div className="flex rounded-xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow">
      <div
        className="w-24 shrink-0 flex items-center justify-center bg-highlight/30"
        aria-hidden
      >
        <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-14 h-14" />
      </div>
      <div className="p-5 flex-1 min-w-0">
        <h3 className="font-semibold text-text text-base">{experience.title}</h3>
        <a
          href={experience.company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-jacket text-sm font-medium"
        >
          {experience.company}
        </a>
        <div className="text-secondary text-sm mt-1">
          {experience.duration} · {experience.location}
        </div>
        <ul className="mt-3 space-y-1 text-secondary text-sm list-disc list-inside">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
