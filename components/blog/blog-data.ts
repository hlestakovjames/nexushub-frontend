export type BlogSection = {
  slug: string;
  name: string;
  description: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  sections: BlogSection[];
};

export type BlogEditorialSection = {
  slug: string;
  name: string;
  description: string;
};

export type BlogAuthor = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  section: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  content: string;
  tags: string[];
  contentType:
    | 'Insight'
    | 'Analysis'
    | 'Opinion'
    | 'Story'
    | 'Feature'
    | 'Interview'
    | 'Guide';
  status: 'Draft' | 'Published';
};

export const blogEditorialSections: BlogEditorialSection[] = [
  {
    slug: 'featured',
    name: 'Featured',
    description:
      'Selected articles and perspectives highlighted by the Nexus Hub editorial platform.',
  },
  {
    slug: 'latest',
    name: 'Latest',
    description:
      'The latest published articles, perspectives, stories, and developments from the Blog.',
  },
  {
    slug: 'insights',
    name: 'Insights',
    description:
      'Thoughtful perspectives and practical observations across technology, business, leadership, and society.',
  },
  {
    slug: 'analysis',
    name: 'Analysis',
    description:
      'In-depth examination of developments, ideas, trends, and issues shaping organisations and communities.',
  },
  {
    slug: 'opinion',
    name: 'Opinion',
    description:
      'Distinct perspectives and informed viewpoints from Nexus Hub contributors and guest voices.',
  },
  {
    slug: 'stories',
    name: 'Stories',
    description:
      'People, organisations, experiences, and journeys worth sharing.',
  },
  {
    slug: 'features',
    name: 'Features',
    description:
      'Long-form editorial pieces exploring subjects in greater depth.',
  },
  {
    slug: 'interviews',
    name: 'Interviews',
    description:
      'Conversations with people building, leading, creating, and contributing across the Nexus Hub ecosystem.',
  },
];

export const blogCategories: BlogCategory[] = [
  {
    slug: 'technology',
    name: 'Technology',
    description:
      'Technology, software, artificial intelligence, digital systems, emerging technologies, and practical technical knowledge.',
    sections: [
      {
        slug: 'technology-news',
        name: 'Technology News',
        description: 'Developments, announcements, and trends across technology.',
      },
      {
        slug: 'software-development',
        name: 'Software & Development',
        description:
          'Software engineering, development practices, platforms, tools, and technical architecture.',
      },
      {
        slug: 'ai-automation',
        name: 'AI & Automation',
        description:
          'Artificial intelligence, intelligent systems, automation, and their practical applications.',
      },
      {
        slug: 'emerging-technology',
        name: 'Emerging Technology',
        description:
          'New and developing technologies shaping the future of digital systems and society.',
      },
      {
        slug: 'ict-digital-systems',
        name: 'ICT & Digital Systems',
        description:
          'Information and communication technologies, infrastructure, systems, and digital environments.',
      },
      {
        slug: 'technology-guides',
        name: 'Technology Guides',
        description:
          'Practical guides and educational resources for understanding and using technology.',
      },
      {
        slug: 'reviews-analysis',
        name: 'Reviews & Analysis',
        description:
          'Reviews, evaluations, comparisons, and deeper analysis of technology and digital products.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'Long-form technology stories and deeper explorations of important subjects.',
      },
    ],
  },

  {
    slug: 'business',
    name: 'Business',
    description:
      'Business strategy, growth, markets, organisations, entrepreneurship, and the changing business environment.',
    sections: [
      {
        slug: 'business-news',
        name: 'Business News',
        description:
          'Developments and updates from the business environment.',
      },
      {
        slug: 'entrepreneurship',
        name: 'Entrepreneurship',
        description:
          'Entrepreneurial thinking, ventures, founders, and building businesses.',
      },
      {
        slug: 'strategy',
        name: 'Strategy',
        description:
          'Business strategy, planning, positioning, and organisational decision-making.',
      },
      {
        slug: 'business-growth',
        name: 'Business Growth',
        description:
          'Growth strategies, scaling, performance, and sustainable business development.',
      },
      {
        slug: 'markets',
        name: 'Markets',
        description:
          'Market developments, opportunities, industries, and commercial trends.',
      },
      {
        slug: 'organisations',
        name: 'Organisations',
        description:
          'Organisational structures, operations, culture, governance, and development.',
      },
      {
        slug: 'business-guides',
        name: 'Business Guides',
        description:
          'Practical knowledge and guidance for businesses and entrepreneurs.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'In-depth business stories and long-form editorial coverage.',
      },
    ],
  },

  {
    slug: 'innovation',
    name: 'Innovation',
    description:
      'Ideas, startups, products, research, emerging trends, and innovation stories.',
    sections: [
      {
        slug: 'innovation-news',
        name: 'Innovation News',
        description:
          'Developments and stories from the innovation landscape.',
      },
      {
        slug: 'ideas',
        name: 'Ideas',
        description:
          'Ideas, concepts, experiments, and new ways of solving problems.',
      },
      {
        slug: 'startups',
        name: 'Startups',
        description:
          'Startup ventures, ecosystems, founders, and emerging companies.',
      },
      {
        slug: 'products',
        name: 'Products',
        description:
          'Innovative products, platforms, services, and product development.',
      },
      {
        slug: 'research',
        name: 'Research',
        description:
          'Research, discoveries, experimentation, and knowledge development.',
      },
      {
        slug: 'emerging-trends',
        name: 'Emerging Trends',
        description:
          'New patterns and developments influencing innovation and society.',
      },
      {
        slug: 'case-studies',
        name: 'Case Studies',
        description:
          'Detailed examples of innovation in practice.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'Long-form explorations of innovation and the people behind it.',
      },
    ],
  },

  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    description:
      'Digital strategy, technology adoption, automation, organisational change, and transformation.',
    sections: [
      {
        slug: 'digital-strategy',
        name: 'Digital Strategy',
        description:
          'Strategies for using digital technology to create organisational value.',
      },
      {
        slug: 'digitalisation',
        name: 'Digitalisation',
        description:
          'Digitalisation of processes, services, information, and operations.',
      },
      {
        slug: 'automation',
        name: 'Automation',
        description:
          'Automation, intelligent workflows, and technology-enabled efficiency.',
      },
      {
        slug: 'technology-adoption',
        name: 'Technology Adoption',
        description:
          'How organisations evaluate, adopt, and implement new technologies.',
      },
      {
        slug: 'organisational-change',
        name: 'Organisational Change',
        description:
          'People, processes, culture, and organisational change during transformation.',
      },
      {
        slug: 'case-studies',
        name: 'Case Studies',
        description:
          'Real-world examples of digital transformation and organisational change.',
      },
      {
        slug: 'guides',
        name: 'Guides',
        description:
          'Practical guidance for organisations navigating digital transformation.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'In-depth stories about transformation and digital change.',
      },
    ],
  },

  {
    slug: 'leadership',
    name: 'Leadership',
    description:
      'Leadership, management, governance, people, careers, and executive perspectives.',
    sections: [
      {
        slug: 'leadership',
        name: 'Leadership',
        description:
          'Leadership principles, practices, experiences, and perspectives.',
      },
      {
        slug: 'management',
        name: 'Management',
        description:
          'Management practices, organisational performance, and people leadership.',
      },
      {
        slug: 'governance',
        name: 'Governance',
        description:
          'Governance, accountability, oversight, and organisational stewardship.',
      },
      {
        slug: 'people',
        name: 'People',
        description:
          'People, culture, teams, relationships, and organisational life.',
      },
      {
        slug: 'career',
        name: 'Career',
        description:
          'Careers, professional development, skills, and workplace growth.',
      },
      {
        slug: 'executive-insights',
        name: 'Executive Insights',
        description:
          'Perspectives and experiences from organisational and executive leadership.',
      },
      {
        slug: 'leadership-stories',
        name: 'Leadership Stories',
        description:
          'Stories of people, decisions, journeys, and leadership experiences.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'Long-form leadership and management stories.',
      },
    ],
  },

  {
    slug: 'entrepreneurship',
    name: 'Entrepreneurship',
    description:
      'Starting businesses, startups, ideas, funding, growth, founders, and entrepreneurial journeys.',
    sections: [
      {
        slug: 'starting-a-business',
        name: 'Starting a Business',
        description:
          'Practical knowledge for starting and establishing a business.',
      },
      {
        slug: 'startups',
        name: 'Startups',
        description:
          'Startup ventures, ecosystems, founders, products, and growth.',
      },
      {
        slug: 'business-ideas',
        name: 'Business Ideas',
        description:
          'Business opportunities, concepts, models, and entrepreneurial ideas.',
      },
      {
        slug: 'funding',
        name: 'Funding',
        description:
          'Funding options, investment, financial planning, and capital.',
      },
      {
        slug: 'growth',
        name: 'Growth',
        description:
          'Business growth, scaling, markets, customers, and expansion.',
      },
      {
        slug: 'founders',
        name: 'Founders',
        description:
          'Founder experiences, lessons, journeys, and perspectives.',
      },
      {
        slug: 'entrepreneur-stories',
        name: 'Entrepreneur Stories',
        description:
          'Stories of entrepreneurs and the ventures they build.',
      },
      {
        slug: 'guides',
        name: 'Guides',
        description:
          'Practical guides for entrepreneurs at different stages of their journey.',
      },
    ],
  },

  {
    slug: 'community',
    name: 'Community',
    description:
      'Community stories, education, health, social impact, youth, people, and community development.',
    sections: [
      {
        slug: 'community-stories',
        name: 'Community Stories',
        description:
          'Stories from communities, organisations, and people making a difference.',
      },
      {
        slug: 'education',
        name: 'Education',
        description:
          'Education, learning, students, institutions, and knowledge.',
      },
      {
        slug: 'health',
        name: 'Health',
        description:
          'Health, wellbeing, healthcare, and community health matters.',
      },
      {
        slug: 'social-impact',
        name: 'Social Impact',
        description:
          'Initiatives, programmes, organisations, and work creating social impact.',
      },
      {
        slug: 'youth',
        name: 'Youth',
        description:
          'Youth voices, opportunities, development, and participation.',
      },
      {
        slug: 'community-development',
        name: 'Community Development',
        description:
          'Community development, participation, resilience, and local progress.',
      },
      {
        slug: 'people',
        name: 'People',
        description:
          'People, experiences, profiles, and human-interest stories.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'Long-form community stories and deeper human-interest features.',
      },
    ],
  },

  {
    slug: 'media',
    name: 'Media',
    description:
      'Media industry developments, broadcasting, content creation, Nexus Hub TV, football, stories, and voices.',
    sections: [
      {
        slug: 'media-industry',
        name: 'Media Industry',
        description:
          'Developments, trends, and perspectives across the media industry.',
      },
      {
        slug: 'nexus-hub-tv',
        name: 'Nexus Hub TV',
        description:
          'Stories, programmes, developments, and perspectives from Nexus Hub TV.',
      },
      {
        slug: 'football',
        name: 'Football',
        description:
          'Football stories, coverage, people, competitions, and developments.',
      },
      {
        slug: 'stories',
        name: 'Stories',
        description:
          'Narrative storytelling, profiles, experiences, and human-interest coverage.',
      },
      {
        slug: 'voices',
        name: 'Voices',
        description:
          'Interviews, conversations, perspectives, and independent voices.',
      },
      {
        slug: 'content-creation',
        name: 'Content Creation',
        description:
          'Content production, creators, storytelling, and digital media.',
      },
      {
        slug: 'broadcasting',
        name: 'Broadcasting',
        description:
          'Broadcasting, television, radio, production, and distribution.',
      },
      {
        slug: 'features',
        name: 'Features',
        description:
          'Long-form media stories and editorial features.',
      },
    ],
  },
];

export const blogAuthors: BlogAuthor[] = [];

export const blogArticles: BlogArticle[] = [];

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogSection(
  categorySlug: string,
  sectionSlug: string,
) {
  const category = getBlogCategory(categorySlug);

  return category?.sections.find(
    (section) => section.slug === sectionSlug,
  );
}

export function getBlogArticle(
  categorySlug: string,
  sectionSlug: string,
  articleSlug: string,
) {
  return blogArticles.find(
    (article) =>
      article.category === categorySlug &&
      article.section === sectionSlug &&
      article.slug === articleSlug,
  );
}
