import { experiences } from './data/experiences'
import { experienceSections } from './data/experienceSections'
import { Idea1LeftAccent } from './components/Idea1LeftAccent'
import { Idea2LogoStrip } from './components/Idea2LogoStrip'
import { Idea3Timeline } from './components/Idea3Timeline'
import { Idea4BentoGrid } from './components/Idea4BentoGrid'
import { Idea5Accordion } from './components/Idea5Accordion'
import { Idea6RoleBadge } from './components/Idea6RoleBadge'
import { Idea3Plus5TimelineAccordion } from './components/Idea3Plus5TimelineAccordion'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-text">{title}</h2>
        <p className="text-secondary text-sm mt-0.5">{subtitle}</p>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-body text-text">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Experience card demos
          </h1>
          <p className="text-secondary mt-2 max-w-xl mx-auto">
            Six layout ideas — pick the one you like, then we can integrate it into your site.
          </p>
        </header>

        <div className="space-y-20">
          <Section
            id="idea-3-plus-5"
            title="Idea 3+5: Timeline + Accordion (grouped)"
            subtitle="Timeline with dots + line; each card expands on click. Sections: Internships → Research & Teaching → Leadership."
          >
            <Idea3Plus5TimelineAccordion sections={experienceSections} />
          </Section>

          <Section
            id="idea-1"
            title="Idea 1: Left accent bar"
            subtitle="Compact card with a vertical accent strip; logo + role + company, duration right."
          >
            {experiences.map((exp, i) => (
              <Idea1LeftAccent key={i} experience={exp} />
            ))}
          </Section>

          <Section
            id="idea-2"
            title="Idea 2: Logo strip"
            subtitle="Full-height logo strip on the left; content on the right."
          >
            {experiences.map((exp, i) => (
              <Idea2LogoStrip key={i} experience={exp} />
            ))}
          </Section>

          <Section
            id="idea-3"
            title="Idea 3: Timeline"
            subtitle="Vertical timeline with dot + line; card hangs to the right."
          >
            {experiences.map((exp, i) => (
              <Idea3Timeline
                key={i}
                experience={exp}
                isLast={i === experiences.length - 1}
              />
            ))}
          </Section>

          <Section
            id="idea-4"
            title="Idea 4: Bento grid"
            subtitle="Cards in a responsive grid; equal-height tiles."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiences.map((exp, i) => (
                <Idea4BentoGrid key={i} experience={exp} />
              ))}
            </div>
          </Section>

          <Section
            id="idea-5"
            title="Idea 5: Accordion"
            subtitle="Collapsed row; click to expand details."
          >
            {experiences.map((exp, i) => (
              <Idea5Accordion key={i} experience={exp} />
            ))}
          </Section>

          <Section
            id="idea-6"
            title="Idea 6: Role badge"
            subtitle="Role as a pill; company + duration below; minimal card."
          >
            {experiences.map((exp, i) => (
              <Idea6RoleBadge key={i} experience={exp} />
            ))}
          </Section>
        </div>

        <footer className="mt-20 pt-8 border-t border-highlight/30 text-center text-secondary text-sm">
          Demo uses your blue theme (body, text, highlight, accent, jacket). Logos are placeholders (initials).
        </footer>
      </div>
    </div>
  )
}
