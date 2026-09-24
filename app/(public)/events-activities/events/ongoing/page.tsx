import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Events"
      eyebrow="Events"
      title="Ongoing Events"
      description="A focused stream for events currently underway or actively in progress."
      parentHref="/events-activities/events"
      coverageAreas={["Live events","Current programmes","Active sessions","Ongoing schedules"]}
    />
  );
}
