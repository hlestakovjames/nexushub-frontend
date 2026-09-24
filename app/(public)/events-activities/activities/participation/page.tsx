import EventActivitySectionPage from '@/components/events-activities/EventActivitySectionPage';

export default function Page() {
  return (
    <EventActivitySectionPage
      type="Activities"
      eyebrow="Activities"
      title="Participation"
      description="A dedicated discovery layer for how people can participate in published Nexus Hub activities."
      parentHref="/events-activities/activities"
      coverageAreas={["Participation opportunities","Eligibility","Registration","Participation information"]}
    />
  );
}
