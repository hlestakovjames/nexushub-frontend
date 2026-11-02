import AboutDetailPage from '@/components/about/AboutDetailPage';

export default function OurStructurePage() {
  return (
    <AboutDetailPage
      eyebrow="Our structure"
      title="Distinct pillars, connected by a shared direction."
      introduction="Nexus Hub is being developed as a connected organisation with three principal pillars. Each pillar has a distinct area of focus, while innovation and systems thinking provide a common way of understanding and developing work across them."
      sections={[
        {
          heading: 'The organisational model',
          paragraphs: [
            'The three-pillar model describes the broad areas through which Nexus Hub organises its work: Digital, Media, and Business. It is an organisational framework for connecting capabilities and initiatives, not a claim that every proposed department or unit has already been formally established.',
            'The model is intended to support coordination while allowing each area to develop the specialist skills, workflows, and responsibilities it needs.'
          ],
          points: [
            { title: 'Digital', description: 'Technology and digital solutions, including web development, software, mobile applications, and connected platforms.' },
            { title: 'Media', description: 'Media, communication, content, and storytelling, including Nexus Hub TV as a subordinate media arm.' },
            { title: 'Business', description: 'Business and enterprise development, including services, products, commercial initiatives, and opportunities.' }
          ]
        },
        {
          heading: 'Innovation & systems thinking',
          paragraphs: [
            'Innovation and systems thinking are cross-cutting disciplines rather than a separate fourth operating pillar. They connect the three areas through research, problem understanding, experimentation, design, development, and continuous improvement.',
            'A systems perspective considers how people, processes, technology, information, resources, and institutions influence one another. It helps Nexus Hub consider the wider environment in which a service, product, or initiative must work.'
          ]
        },
        {
          heading: 'The relationship between the organisation and its work',
          points: [
            { title: 'Organisation', description: 'The parent Nexus Hub identity provides the overall direction, standards, and coordination.' },
            { title: 'Pillars', description: 'Digital, Media, and Business organise the main areas of capability and activity.' },
            { title: 'Products & platforms', description: 'Products and platforms are developed within the wider organisation and may connect capabilities across pillars.' },
            { title: 'Projects & initiatives', description: 'Projects apply capabilities to specific needs, collaborators, communities, or opportunities.' }
          ]
        },
        {
          heading: 'Nexus Hub TV',
          paragraphs: [
            'Nexus Hub TV is positioned as a subordinate media arm within the wider Nexus Hub identity. It is part of the Media direction and should not be confused with the parent organisation or treated as a separate parent entity.'
          ]
        },
        {
          heading: 'An evolving structure',
          paragraphs: [
            'As Nexus Hub grows, its internal teams, reporting relationships, governance arrangements, and formal operating units will need to be documented and confirmed. This page describes the current conceptual organisational model; it does not substitute for formal legal or governance documents.',
            'The structure should evolve in response to actual operations, capacity, and accountability requirements rather than creating departments on paper before they are needed.'
          ]
        }
      ]}
      previous={{ label: 'Mission & vision', href: '/about/mission-vision' }}
      next={{ label: 'Our approach', href: '/about/our-approach' }}
    />
  );
}
