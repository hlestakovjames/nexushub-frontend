import { notFound } from 'next/navigation';
import RegistrationWizard from '@/components/events-activities/RegistrationWizard';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const events = {
  'nexus-hub-digital-innovation-forum': {
    title: 'Nexus Hub Digital Innovation Forum',
    category: 'Technology & Innovation',
    date: '17 October 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Nexus Hub',
    location: 'Kenya',
    summary:
      'A representative sample event focused on digital innovation, technology, entrepreneurship, and practical digital solutions.',
    requiresPayment: true,
    registrationFee: 'KSh 500',
  },
};

export function generateStaticParams() {
  return [
    {
      slug: 'nexus-hub-digital-innovation-forum',
    },
  ];
}

export default async function RegisterEventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events[slug as keyof typeof events];

  if (!event) {
    notFound();
  }

  return (
    <RegistrationWizard
      type="event"
      title={event.title}
      category={event.category}
      date={event.date}
      time={event.time}
      venue={event.venue}
      location={event.location}
      summary={event.summary}
      requiresPayment={event.requiresPayment}
      registrationFee={event.registrationFee}
    />
  );
}
