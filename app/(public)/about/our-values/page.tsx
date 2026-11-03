import AboutDetailPage from '@/components/about/AboutDetailPage';

export default function OurValuesPage() {
  return (
    <AboutDetailPage
      eyebrow="Our values"
      title="Principles that shape how we think, decide, and work."
      introduction="Values are useful when they guide everyday behaviour and difficult decisions. These principles describe the standards Nexus Hub aims to uphold as its people, capabilities, and activities develop."
      sections={[
        {
          heading: 'Curiosity',
          paragraphs: [
            'We ask questions, explore how things work, and remain open to learning from different disciplines and experiences. Curiosity encourages us to look beyond familiar answers and keep improving our understanding.'
          ]
        },
        {
          heading: 'Integrity',
          paragraphs: [
            'We value honesty, responsibility, transparency, and respect. We aim to communicate accurately, honour commitments, acknowledge limitations, and take responsibility for our decisions and actions.'
          ]
        },
        {
          heading: 'Practical innovation',
          paragraphs: [
            'We look beyond novelty to develop ideas and solutions that address real needs and can work in practice. An idea should be examined, tested, and refined before its value is assumed.'
          ]
        },
        {
          heading: 'Collaboration',
          paragraphs: [
            'We bring people, skills, and perspectives together because meaningful work is rarely built in isolation. Collaboration requires listening, clear communication, shared responsibility, and respect for different contributions.'
          ]
        },
        {
          heading: 'Excellence',
          paragraphs: [
            'We pursue thoughtful, dependable work and keep improving the quality of what we create. Excellence is a continuing practice of care, attention, learning, and follow-through rather than a claim of perfection.'
          ]
        },
        {
          heading: 'Long-term thinking',
          paragraphs: [
            'We consider how products, systems, relationships, and capabilities can grow and remain useful over time. This includes thinking about sustainability, maintainability, trust, and the consequences of decisions beyond the immediate task.'
          ]
        },
        {
          heading: 'Putting values into practice',
          points: [
            { title: 'In decisions', description: 'Explain the reasoning, consider who is affected, and be clear about trade-offs.' },
            { title: 'In delivery', description: 'Set realistic expectations, protect quality, and communicate progress honestly.' },
            { title: 'In relationships', description: 'Treat clients, collaborators, colleagues, and communities with respect.' },
            { title: 'In growth', description: 'Build capability responsibly and let actual progress support public claims.' }
          ]
        }
      ]}
      previous={{ label: 'Our approach', href: '/about/our-approach' }}
      next={{ label: 'Leadership', href: '/about/leadership' }}
    />
  );
}
