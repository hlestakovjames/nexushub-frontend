import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Events"
      eyebrow="Events"
      title="Past Events"
      description="A permanent archive for completed events, their summaries, media, records, and outcomes."
      parentHref="/events-activities/events"
      coverageAreas={["Event archive","Past programmes","Event media","Outcomes"]}
    />
  );
}
