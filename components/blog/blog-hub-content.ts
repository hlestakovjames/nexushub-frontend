export type BlogEditorialContent = {
  intro: string;
  purpose: string;
  topics: string[];
  audience: string;
};

export type BlogCategoryHubContent = {
  intro: string;
  focus: string;
  topics: string[];
  audience: string;
  editorialApproach: string;
};

export const blogEditorialContent: Record<string, BlogEditorialContent> = {
  featured: {
    intro:
      'A curated selection of notable Nexus Hub stories, perspectives, analysis, interviews, and features. Featured content highlights subjects that deserve broader attention across technology, business, leadership, innovation, community, and media.',
    purpose:
      'This section brings together selected articles that provide significant insight, useful perspectives, strong storytelling, or broader relevance to the Nexus Hub audience.',
    topics: [
      'Notable technology and digital developments',
      'Business and entrepreneurship perspectives',
      'Leadership and organisational insights',
      'Innovation and emerging ideas',
      'Community and social-impact stories',
    ],
    audience:
      'Readers looking for a curated starting point into the most notable content published across the Nexus Hub Blog.',
  },

  latest: {
    intro:
      'The latest publishing stream from the Nexus Hub Blog, bringing together newly published articles across the Blog’s categories and editorial formats.',
    purpose:
      'Latest provides a chronological view of new Blog content so readers can follow what Nexus Hub is publishing as new stories, insights, analysis, interviews, and features become available.',
    topics: [
      'Recently published articles',
      'New developments and announcements',
      'Fresh perspectives and analysis',
      'New stories and interviews',
      'Recently released guides and features',
    ],
    audience:
      'Readers who want to keep up with the newest Nexus Hub Blog publications.',
  },

  insights: {
    intro:
      'Insights explore ideas, developments, experiences, and practical perspectives that can help readers better understand technology, business, organisations, leadership, innovation, and digital change.',
    purpose:
      'This editorial area focuses on thoughtful interpretation and practical knowledge rather than simply reporting what happened.',
    topics: [
      'Practical perspectives',
      'Technology and digital insights',
      'Business and organisational thinking',
      'Leadership perspectives',
      'Innovation and emerging trends',
    ],
    audience:
      'Professionals, students, entrepreneurs, leaders, and curious readers looking for useful perspectives beyond surface-level information.',
  },

  analysis: {
    intro:
      'Analysis examines important developments and subjects in greater depth, connecting events, technologies, business decisions, organisational changes, and emerging trends with their wider implications.',
    purpose:
      'The section provides structured examination of subjects that benefit from context, comparison, evidence, and deeper explanation.',
    topics: [
      'Technology and industry developments',
      'Business and market developments',
      'Digital transformation',
      'Innovation and emerging trends',
      'Leadership and organisational issues',
    ],
    audience:
      'Readers who want deeper context and structured examination of important developments and decisions.',
  },

  opinion: {
    intro:
      'Opinion provides space for clearly identified viewpoints and perspectives on technology, business, leadership, innovation, community, media, and related issues.',
    purpose:
      'Opinion articles present individual perspectives and arguments while distinguishing them from factual reporting and analysis.',
    topics: [
      'Technology perspectives',
      'Business and entrepreneurship viewpoints',
      'Leadership perspectives',
      'Innovation and digital change',
      'Community and media issues',
    ],
    audience:
      'Readers interested in perspectives, arguments, and informed viewpoints on subjects relevant to the Nexus Hub ecosystem.',
  },

  stories: {
    intro:
      'Stories focuses on people, organisations, experiences, initiatives, communities, and journeys that provide a human and practical view of the subjects covered by Nexus Hub.',
    purpose:
      'This section brings context and human experience into the Blog through narrative-driven coverage.',
    topics: [
      'People and organisations',
      'Entrepreneur and founder journeys',
      'Community stories',
      'Technology and innovation journeys',
      'Leadership and organisational experiences',
    ],
    audience:
      'Readers who value human experiences, journeys, practical lessons, and narrative-driven coverage.',
  },

  features: {
    intro:
      'Features provide longer-form coverage of important subjects that require more context, explanation, research, or storytelling than a conventional article.',
    purpose:
      'Feature articles allow Nexus Hub to explore complex subjects through deeper research, multiple perspectives, detailed explanations, and extended storytelling.',
    topics: [
      'Long-form technology coverage',
      'Business and entrepreneurship features',
      'Innovation and emerging technology',
      'Leadership and organisations',
      'Community and media features',
    ],
    audience:
      'Readers interested in comprehensive stories and deeper exploration of significant subjects.',
  },

  interviews: {
    intro:
      'Interviews bring direct perspectives from founders, leaders, professionals, creators, innovators, community figures, and other people whose experiences contribute to the Nexus Hub conversation.',
    purpose:
      'The section uses conversations and first-hand perspectives to explore ideas, experiences, decisions, challenges, opportunities, and lessons.',
    topics: [
      'Founder and entrepreneur interviews',
      'Technology and ICT professionals',
      'Business and organisational leaders',
      'Creators and media professionals',
      'Community and innovation voices',
    ],
    audience:
      'Readers interested in first-hand experiences, professional perspectives, leadership journeys, and practical lessons.',
  },
};

export const blogCategoriesHubContent = {
  intro:
    'The Nexus Hub Blog is organised around eight major subject categories covering technology, business, innovation, digital transformation, leadership, entrepreneurship, community, and media.',
  purpose:
    'Categories provide the subject-based structure of the Blog. Each category contains its own specialist sections, allowing readers to move from a broad subject area into more focused topics.',
  topics: [
    'Technology and software',
    'Business and entrepreneurship',
    'Innovation and emerging ideas',
    'Digital transformation',
    'Leadership and organisations',
    'Community and social impact',
    'Media and content creation',
    'Professional and practical knowledge',
  ],
  audience:
    'Readers can use the category structure to explore the subjects that are most relevant to their interests, profession, studies, organisation, or community.',
};

export const blogCategoryHubContent: Record<string, BlogCategoryHubContent> = {
  technology: {
    intro:
      'The Technology category covers the technologies, systems, software, digital infrastructure, and technical developments shaping how people and organisations work and communicate.',
    focus:
      'Its coverage ranges from technology news and software development to artificial intelligence, ICT systems, emerging technologies, practical guides, reviews, and deeper technical features.',
    topics: [
      'Technology news and industry developments',
      'Software and development',
      'Artificial intelligence and automation',
      'Emerging technologies',
      'ICT and digital systems',
      'Technology guides',
      'Reviews and analysis',
    ],
    audience:
      'Developers, ICT professionals, students, organisations, entrepreneurs, technology enthusiasts, and general readers interested in digital systems.',
    editorialApproach:
      'Technology coverage combines news, practical knowledge, analysis, guides, reviews, and long-form features.',
  },

  business: {
    intro:
      'The Business category explores how organisations, enterprises, markets, entrepreneurs, and business leaders create value, respond to change, and pursue sustainable growth.',
    focus:
      'Coverage spans business news, entrepreneurship, strategy, growth, markets, organisations, practical business guidance, and feature stories.',
    topics: [
      'Business news',
      'Entrepreneurship',
      'Business strategy',
      'Business growth',
      'Markets',
      'Organisations',
      'Business guides',
    ],
    audience:
      'Entrepreneurs, business owners, professionals, students, organisational leaders, and readers interested in how businesses operate and grow.',
    editorialApproach:
      'Business coverage combines current developments with practical guidance, strategic perspectives, analysis, and feature storytelling.',
  },

  innovation: {
    intro:
      'The Innovation category explores ideas, products, research, startups, emerging trends, and new approaches that have the potential to change how people and organisations solve problems.',
    focus:
      'It provides a space for understanding innovation from early ideas and research through products, startups, case studies, and emerging developments.',
    topics: [
      'Innovation news',
      'Ideas and new concepts',
      'Startups',
      'Products',
      'Research',
      'Emerging trends',
      'Case studies',
    ],
    audience:
      'Innovators, founders, researchers, students, technology professionals, entrepreneurs, and readers interested in new ideas and emerging possibilities.',
    editorialApproach:
      'Innovation coverage connects ideas and developments with practical examples, research, case studies, and deeper features.',
  },

  'digital-transformation': {
    intro:
      'The Digital Transformation category examines how technology changes organisations, processes, services, customer experiences, and ways of working.',
    focus:
      'Coverage looks beyond technology itself to examine digital strategy, digitalisation, automation, technology adoption, organisational change, implementation experiences, and practical transformation guidance.',
    topics: [
      'Digital strategy',
      'Digitalisation',
      'Automation',
      'Technology adoption',
      'Organisational change',
      'Transformation case studies',
      'Practical guides',
    ],
    audience:
      'Business leaders, ICT professionals, managers, organisations, entrepreneurs, students, and anyone interested in applying technology to organisational change.',
    editorialApproach:
      'Digital transformation coverage connects technology with people, processes, strategy, organisational structures, and practical implementation.',
  },

  leadership: {
    intro:
      'The Leadership category explores leadership, management, governance, people, careers, executive thinking, and the experiences that shape effective organisations.',
    focus:
      'It examines leadership from both strategic and human perspectives, covering management practices, governance, professional development, executive insights, and leadership stories.',
    topics: [
      'Leadership',
      'Management',
      'Governance',
      'People and organisations',
      'Career development',
      'Executive insights',
      'Leadership stories',
    ],
    audience:
      'Leaders, managers, professionals, students, entrepreneurs, aspiring executives, and readers interested in organisational leadership.',
    editorialApproach:
      'Leadership content combines practical perspectives, professional development, organisational thinking, interviews, stories, and deeper features.',
  },

  entrepreneurship: {
    intro:
      'The Entrepreneurship category focuses on the realities of starting, building, developing, and growing businesses and ventures.',
    focus:
      'Coverage follows the entrepreneurial journey from business ideas and early-stage decisions through funding, growth, founders, and practical guidance.',
    topics: [
      'Starting a business',
      'Business ideas',
      'Startups',
      'Funding',
      'Business growth',
      'Founders',
      'Entrepreneur stories',
      'Practical guides',
    ],
    audience:
      'Aspiring entrepreneurs, founders, startup teams, business students, small-business owners, and readers exploring entrepreneurship.',
    editorialApproach:
      'Entrepreneurship coverage balances practical guidance with founder experiences, business ideas, startup developments, and growth perspectives.',
  },

  community: {
    intro:
      'The Community category focuses on people, communities, education, health, youth, social impact, development, and the initiatives that shape everyday life.',
    focus:
      'It provides space for stories and perspectives that connect technology, organisations, initiatives, and people with wider community outcomes.',
    topics: [
      'Community stories',
      'Education',
      'Health',
      'Social impact',
      'Youth',
      'Community development',
      'People and experiences',
    ],
    audience:
      'Community members, students, organisations, development actors, young people, professionals, and readers interested in social and community issues.',
    editorialApproach:
      'Community coverage emphasises people, experiences, initiatives, practical impact, and stories that provide context around community development.',
  },

  media: {
    intro:
      'The Media category explores the media industry, broadcasting, content creation, digital storytelling, Nexus Hub TV, football, stories, voices, and the changing relationship between media and audiences.',
    focus:
      'Coverage connects traditional and digital media with creators, broadcasters, audiences, sports, storytelling, and emerging approaches to content production.',
    topics: [
      'Media industry',
      'Nexus Hub TV',
      'Football',
      'Stories',
      'Voices',
      'Content creation',
      'Broadcasting',
    ],
    audience:
      'Creators, media professionals, sports audiences, broadcasters, students, digital publishers, and readers interested in media and storytelling.',
    editorialApproach:
      'Media coverage combines industry perspectives, original storytelling, creator-focused content, broadcasting discussions, sports coverage, and features.',
  },
};
