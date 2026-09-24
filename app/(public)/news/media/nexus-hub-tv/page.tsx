import NewsSectionPage from '@/components/news/NewsSectionPage';

export default function Page() {
  return (
    <NewsSectionPage
      eyebrow="Media News"
      title="Nexus Hub TV News"
      description="Coverage of Nexus Hub TV developments, productions, programming, platform milestones, and broadcast activity."
      parentLabel="Media"
      parentHref="/news/media"
      coverageAreas={["Nexus Hub TV","Productions","Programming","Broadcast developments"]}
    />
  );
}
