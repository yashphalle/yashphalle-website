import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea4BentoGrid({ experience }) {
  return (
    <div className="rounded-xl bg-white shadow-card hover:shadow-card-hover transition-shadow p-5 border border-highlight/20 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-11 h-11" />
        <div className="min-w-0">
          <h3 className="font-semibold text-text text-sm leading-tight">{experience.title}</h3>
          <a
            href={experience.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-jacket text-xs font-medium truncate block"
          >
            {experience.company}
          </a>
        </div>
      </div>
      <div className="text-secondary text-xs mb-3">
        {experience.duration} · {experience.location}
      </div>
      <ul className="space-y-1 text-secondary text-sm list-disc list-inside flex-1">
        {experience.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
