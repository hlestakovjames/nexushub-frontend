import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Activities"
      eyebrow="Activities"
      title="Ongoing Activities"
      description="A focused stream for activities that are currently underway or actively running."
      parentHref="/events-activities/activities"
      coverageAreas={["Active activities","Current programmes","Ongoing participation","Live schedules"]}
    />
  );
}
