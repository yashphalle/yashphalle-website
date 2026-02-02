import { LogoPlaceholder } from './LogoPlaceholder'

export function Idea3Timeline({ experience, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full border-2 border-accent bg-body shrink-0 z-10" />
        {!isLast && <div className="w-0.5 flex-1 min-h-[60px] bg-accent/50 mt-1" />}
      </div>
      <div className="pb-8 flex-1 min-w-0">
        <div className="rounded-xl bg-white shadow-card hover:shadow-card-hover transition-shadow p-5 border border-highlight/20">
          <div className="flex flex-wrap items-start gap-3">
            <LogoPlaceholder initial={experience.initial} color={experience.color} size="w-10 h-10" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-text text-base">{experience.title}</h3>
              <a
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-jacket text-sm font-medium"
              >
                {experience.company}
              </a>
              <div className="text-secondary text-sm mt-0.5">
                {experience.duration} · {experience.location}
              </div>
            </div>
          </div>
          <ul className="mt-3 space-y-1 text-secondary text-sm list-disc list-inside">
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
