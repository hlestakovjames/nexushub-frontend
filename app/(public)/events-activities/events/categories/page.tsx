import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Events"
      eyebrow="Events"
      title="Event Categories"
      description="A categorised discovery layer for different types of Nexus Hub events."
      parentHref="/events-activities/events"
      coverageAreas={["Category directory","Event types","Topic discovery","Filtered listings"]}
    />
  );
}
