import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Activities"
      eyebrow="Activities"
      title="Past Activities"
      description="An archive for completed activities, participation records, summaries, media, and outcomes."
      parentHref="/events-activities/activities"
      coverageAreas={["Activity archive","Completed programmes","Activity media","Outcomes"]}
    />
  );
}
