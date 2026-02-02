import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea1LeftAccent({ experience }) {
  return (
    <div className="flex rounded-xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow border border-highlight/30">
      <div className="w-1 shrink-0 bg-accent" aria-hidden />
      <div className="p-5 flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <LogoPlaceholder initial={experience.initial} color={experience.color} />
            <div>
              <h3 className="font-semibold text-text text-base">{experience.title}</h3>
              <a
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-jacket text-sm font-medium"
              >
                {experience.company}
              </a>
            </div>
          </div>
          <div className="text-right text-secondary text-sm shrink-0">
            <div>{experience.duration}</div>
            <div>{experience.location}</div>
          </div>
        </div>
        <ul className="mt-4 space-y-1.5 text-secondary text-sm list-disc list-inside">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
