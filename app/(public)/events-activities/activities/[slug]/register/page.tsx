import { notFound } from 'next/navigation';
import RegistrationWizard from '@/components/events-activities/RegistrationWizard';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const activities = {
  'community-digital-skills-clinic': {
    title: 'Community Digital Skills Clinic',
    category: 'Community',
    date: '26 September 2026',
    time: '9:00 AM – 1:00 PM',
    location: 'Kenya',
    summary:
      'A representative sample activity focused on practical digital skills, guided learning, and accessible technology awareness.',
    requiresPayment: false,
  },
};

export function generateStaticParams() {
  return [
    {
      slug: 'community-digital-skills-clinic',
    },
  ];
}

export default async function RegisterActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = activities[slug as keyof typeof activities];

  if (!activity) {
    notFound();
  }

  return (
    <RegistrationWizard
      type="activity"
      title={activity.title}
      category={activity.category}
      date={activity.date}
      time={activity.time}
      location={activity.location}
      summary={activity.summary}
      requiresPayment={activity.requiresPayment}
    />
  );
}
