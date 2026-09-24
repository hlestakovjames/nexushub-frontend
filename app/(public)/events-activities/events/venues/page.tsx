import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Events"
      eyebrow="Events"
      title="Event Venues"
      description="A dedicated area for discovering and organising the venues used for Nexus Hub events."
      parentHref="/events-activities/events"
      coverageAreas={["Venue directory","Locations","Capacity","Venue information"]}
    />
  );
}
