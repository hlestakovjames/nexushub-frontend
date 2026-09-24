import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Activities"
      eyebrow="Activities"
      title="Activity Programmes"
      description="A structured area for recurring or organised programmes delivered through activities."
      parentHref="/events-activities/activities"
      coverageAreas={["Programmes","Recurring activities","Programme schedules","Programme information"]}
    />
  );
}
