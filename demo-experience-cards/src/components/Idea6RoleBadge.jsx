import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea6RoleBadge({ experience }) {
  return (
    <div className="rounded-xl bg-white shadow-card hover:shadow-card-hover transition-shadow p-5 border border-highlight/20">
      <div className="flex flex-wrap items-start gap-3">
        <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-10 h-10" />
        <div className="flex-1 min-w-0">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium text-white mb-2"
            style={{ backgroundColor: experience.color }}
          >
            {experience.title}
          </span>
          <a
            href={experience.company_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-jacket text-sm font-semibold block"
          >
            {experience.company}
          </a>
          <div className="text-secondary text-sm mt-0.5">
            {experience.duration} · {experience.location}
          </div>
        </div>
      </div>
      <ul className="mt-4 space-y-1 text-secondary text-sm list-disc list-inside">
        {experience.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
