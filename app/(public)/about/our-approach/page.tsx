import AboutDetailPage from '@/components/about/AboutDetailPage';

export default function OurApproachPage() {
  return (
    <AboutDetailPage
      eyebrow="Our approach"
      title="Understand the system before shaping the solution."
      introduction="Nexus Hub aims to combine research, systems thinking, creative exploration, and practical development. The process adapts to the problem, the people affected, and the scale of the opportunity."
      sections={[
        {
          heading: 'Start with the real-world need',
          paragraphs: [
            'We begin by clarifying the situation rather than assuming that the first proposed solution is the right one. This means understanding who is affected, what they are trying to achieve, what currently happens, and where the difficulties or opportunities lie.'
          ]
        },
        {
          heading: 'See the wider system',
          paragraphs: [
            'Problems rarely exist in isolation. We consider relevant people, processes, information, technology, resources, incentives, constraints, and external conditions. Mapping these relationships can reveal causes, dependencies, unintended effects, and opportunities that a narrow view might miss.'
          ]
        },
        {
          heading: 'Research and explore',
          paragraphs: [
            'Research helps test assumptions and improve understanding. Depending on the work, this may involve reviewing existing solutions, gathering user perspectives, studying evidence, comparing approaches, or exploring technical feasibility.',
            'The goal is not research for its own sake. It is to make better decisions and identify a response that is appropriate to the need and available capacity.'
          ]
        },
        {
          heading: 'Design and develop',
          points: [
            { title: 'Define', description: 'Translate the understanding of the problem into clear objectives, requirements, and constraints.' },
            { title: 'Design', description: 'Plan the experience, system, service, or product and make important relationships visible.' },
            { title: 'Develop', description: 'Build a working response using suitable methods, tools, and technical foundations.' },
            { title: 'Test', description: 'Evaluate whether the response works as intended and identify gaps, risks, or improvements.' }
          ]
        },
        {
          heading: 'Learn and improve',
          paragraphs: [
            'Development does not end when something is first released or delivered. Feedback, observation, testing, and changing needs should inform subsequent improvements. We aim to make decisions traceable and keep learning connected to practical outcomes.'
          ]
        },
        {
          heading: 'Principles that shape the work',
          points: [
            { title: 'Purposeful', description: 'Start with a need and a clear reason for doing the work.' },
            { title: 'Evidence-aware', description: 'Use research, observation, and testing to inform decisions.' },
            { title: 'Collaborative', description: 'Recognise the knowledge and perspectives of people affected by the work.' },
            { title: 'Responsible', description: 'Consider usability, privacy, accessibility, security, sustainability, and potential unintended effects.' },
            { title: 'Iterative', description: 'Improve through feedback and learning rather than treating the first version as final.' }
          ]
        }
      ]}
      previous={{ label: 'Our structure', href: '/about/our-structure' }}
      next={{ label: 'Our values', href: '/about/our-values' }}
    />
  );
}
