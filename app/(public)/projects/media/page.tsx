import ProjectSectionPage from '@/components/projects/ProjectSectionPage';

export default function MediaProjectsPage() {
  return (
    <ProjectSectionPage
      eyebrow="Media Projects"
      title="Stories, productions, and media experiences."
      intro="Projects across Nexus Hub TV, football, stories, voices, productions, and other media initiatives."
      parentHref="/projects"
      parentLabel="All Projects"
      areas={[
        {
          name: 'Nexus Hub TV',
          href: '/projects/media/nexus-hub-tv',
          description: 'Television and video projects developed under the Nexus Hub TV ecosystem.',
        },
        {
          name: 'Football',
          href: '/projects/media/football',
          description: 'Football media projects covering coverage, productions, content, and audience experiences.',
        },
        {
          name: 'Stories',
          href: '/projects/media/stories',
          description: 'Human-interest, culture, community, and documentary-style storytelling projects.',
        },
        {
          name: 'Voices',
          href: '/projects/media/voices',
          description: 'Interview, podcast, opinion, and voice-led media projects.',
        },
        {
          name: 'Productions',
          href: '/projects/media/productions',
          description: 'Independent productions, campaigns, branded content, and multimedia experiences.',
        },
      ]}
    />
  );
}
