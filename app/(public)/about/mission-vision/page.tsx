import AboutDetailPage from '@/components/about/AboutDetailPage';

export default function MissionVisionPage() {
  return (
    <AboutDetailPage
      eyebrow="Mission & vision"
      title="A clear purpose for what we build and where we are going."
      introduction="Nexus Hub's mission and vision express the purpose behind its work and the longer-term direction of the organisation. They provide a shared reference point as capabilities, products, and initiatives develop."
      sections={[
        {
          heading: 'Our purpose',
          paragraphs: [
            'To connect ideas, capabilities, people, and opportunities in ways that create practical value and enable progress.',
            'The purpose is broader than delivering an individual service or launching a single product. It is about developing useful capabilities and bringing them together around real needs.'
          ]
        },
        {
          heading: 'Our vision',
          paragraphs: [
            'A connected ecosystem where technology, creativity, media, enterprise, and innovation work together to turn meaningful ideas into lasting value.',
            'This is a long-term direction, not a statement that every part of the ecosystem is already operational.'
          ]
        },
        {
          heading: 'Our mission',
          paragraphs: [
            'To bring people, knowledge, creativity, and technology together to understand needs and develop practical digital solutions, media experiences, products, and business initiatives.',
            'The mission combines understanding with implementation: exploring the problem, choosing a useful response, developing it responsibly, and learning from how it works.'
          ]
        },
        {
          heading: 'Strategic objectives',
          points: [
            { title: 'Develop useful solutions', description: 'Create digital products, services, and experiences that respond to identifiable needs.' },
            { title: 'Strengthen connected capabilities', description: 'Build the skills, processes, and organisational foundations that support the Digital, Media, and Business pillars.' },
            { title: 'Advance research and innovation', description: 'Encourage curiosity, systems thinking, experimentation, and practical problem-solving.' },
            { title: 'Create sustainable opportunities', description: 'Develop responsible business models, collaborations, and initiatives that can support long-term growth.' },
            { title: 'Build with accountability', description: 'Be clear about current capacity, commitments, progress, and what remains a future ambition.' }
          ]
        },
        {
          heading: 'How the direction guides decisions',
          paragraphs: [
            'The vision helps assess whether an opportunity contributes to the organisation's long-term direction. The mission helps determine what work to undertake and how to approach it. The purpose keeps attention on the value that work is intended to create.',
            'These statements should be revisited as the organisation develops, while preserving a consistent sense of why Nexus Hub exists.'
          ]
        }
      ]}
      previous={{ label: 'Our story', href: '/about/our-story' }}
      next={{ label: 'Our structure', href: '/about/our-structure' }}
    />
  );
}
