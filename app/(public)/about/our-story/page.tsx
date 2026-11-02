import AboutDetailPage from '@/components/about/AboutDetailPage';

export default function OurStoryPage() {
  return (
    <AboutDetailPage
      eyebrow="Our story"
      title="A journey shaped by learning, practical work, and a widening vision."
      introduction="Nexus Hub's story is an evolution rather than a single launch moment. It began with an interest in helping people use digital services, developed through creative and technology work, and gradually grew into a broader organisational vision."
      sections={[
        {
          heading: 'The early idea — 2024',
          paragraphs: [
            'Around April to June 2024, an experience independently completing a KUCCPS application using a phone and mobile data prompted an early question: could other people be helped to access important digital and administrative services without unnecessary barriers?',
            'The idea was not yet a defined company. It was an exploration of practical online assistance, including application-related services such as KUCCPS and HELB, alongside other digital support.',
            'In late November 2024, a request from a cousin to create a Facebook poster became the first graphic-design commission. The positive response helped reveal another possible direction: turning a self-taught creative skill into a service.'
          ]
        },
        {
          heading: 'Brightstar Solutions — January 2025',
          paragraphs: [
            'The early business direction took the name Brightstar Solutions, with graphic design at its centre. It represented the first organised expression of the creative-services idea, while the earlier interest in digital assistance remained part of the wider origin.'
          ]
        },
        {
          heading: 'Jimmy Tech Innovations — August 2025',
          paragraphs: [
            'The direction expanded under the name Jimmy Tech Innovations. Graphic design continued, and web development became part of the work as technical interests and learning developed.'
          ]
        },
        {
          heading: 'Nexus Hub — 22 November 2025',
          paragraphs: [
            'Nexus Hub emerged through the rebranding of Jimmy Tech Innovations. It carried forward the existing work and capabilities while establishing a new identity. The wider ecosystem vision should not be read back into this date as though the full structure already existed.'
          ]
        },
        {
          heading: 'A broader vision — 2026 onward',
          paragraphs: [
            'During 2026, the ambition widened beyond a design and web-development service direction. Technology, media, business, products, and innovation began to be considered as connected areas within a larger organisation.',
            'This is an evolving direction. Some capabilities and projects are active, while other parts remain planned or under development. The distinction matters: the story records both what has happened and the direction being built toward.'
          ]
        },
        {
          heading: 'What connects the stages',
          points: [
            { title: 'Learning through action', description: 'New directions have emerged through trying things, solving practical problems, and building capability over time.' },
            { title: 'Continuity with change', description: 'Each identity marks a stage of development; the later vision builds on earlier work rather than erasing it.' },
            { title: 'A systems perspective', description: 'The current direction looks at how technology, people, creativity, information, and enterprise can work together.' },
            { title: 'Building progressively', description: 'The aim is to strengthen foundations and develop the wider ecosystem in deliberate, achievable stages.' }
          ]
        }
      ]}
      next={{ label: 'Mission & vision', href: '/about/mission-vision' }}
    />
  );
}
