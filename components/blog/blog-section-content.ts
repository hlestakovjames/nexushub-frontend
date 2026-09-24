export type BlogSectionContent = {
  intro: string;
  topics: string[];
  audience: string;
};

export const blogSectionContent: Record<string, Record<string, BlogSectionContent>> = {
  "technology": {
    "technology-news": {
      "intro": "Technology News covers significant developments across the technology landscape, including major product announcements, industry movements, digital infrastructure developments, and important changes affecting how people and organisations use technology.",
      "topics": [
        "Technology companies and industry developments",
        "New products, platforms and services",
        "Major technology announcements and developments",
        "Digital infrastructure and connectivity",
        "Technology trends affecting organisations and society"
      ],
      "audience": "Readers who want to stay informed about important developments in technology without limiting coverage to a single product, company or platform."
    },
    "software-development": {
      "intro": "Software & Development explores the technologies, practices and people behind modern software. It covers the journey from requirements and architecture to development, testing, deployment and ongoing improvement.",
      "topics": [
        "Software engineering and development practices",
        "Programming languages and frameworks",
        "Application architecture and system design",
        "Development tools and workflows",
        "Testing, deployment and software maintenance"
      ],
      "audience": "Developers, ICT students, technical teams and readers interested in understanding how modern software systems are built."
    },
    "ai-automation": {
      "intro": "AI & Automation examines artificial intelligence and automation from both technical and practical perspectives, with attention to how intelligent systems are being applied across organisations, businesses and everyday activities.",
      "topics": [
        "Artificial intelligence and machine learning",
        "Generative AI and intelligent assistants",
        "Business and workflow automation",
        "AI-enabled applications and services",
        "Responsible adoption of AI"
      ],
      "audience": "Technology professionals, organisations, entrepreneurs and general readers seeking practical understanding of AI and automation."
    },
    "emerging-technology": {
      "intro": "Emerging Technology looks beyond established systems to explore technologies that are developing rapidly and may influence the next generation of digital products, services and infrastructure.",
      "topics": [
        "New and developing technologies",
        "Future-facing digital systems",
        "Technology adoption signals",
        "Emerging platforms and capabilities",
        "Potential applications and implications"
      ],
      "audience": "Readers interested in technologies that are still developing and the possibilities they may create."
    },
    "ict-digital-systems": {
      "intro": "ICT & Digital Systems focuses on the infrastructure, platforms, networks and information systems that support modern organisations and connected communities.",
      "topics": [
        "Information and communication technology",
        "Networks and connectivity",
        "Enterprise and institutional systems",
        "Digital infrastructure",
        "Information management and integration"
      ],
      "audience": "ICT professionals, students, organisations and readers interested in the systems supporting digital environments."
    },
    "technology-guides": {
      "intro": "Technology Guides provides practical and explanatory material designed to make technology easier to understand, evaluate and use.",
      "topics": [
        "Technology explainers",
        "How-to guidance",
        "Digital tools and platforms",
        "Technical concepts explained simply",
        "Practical technology adoption"
      ],
      "audience": "Students, professionals, organisations and everyday technology users looking for clear and practical guidance."
    },
    "reviews-analysis": {
      "intro": "Reviews & Analysis examines technology products, platforms, systems and developments in greater depth, focusing on capabilities, use cases, limitations and wider implications.",
      "topics": [
        "Technology product reviews",
        "Platform and service analysis",
        "Technology comparisons",
        "System capabilities and limitations",
        "Technology adoption considerations"
      ],
      "audience": "Readers evaluating technologies or seeking deeper context beyond headline announcements."
    },
    "features": {
      "intro": "Technology Features provides longer-form explorations of technology, bringing together people, ideas, developments and stories that deserve deeper treatment.",
      "topics": [
        "Technology profiles",
        "Long-form technical stories",
        "People behind technology",
        "Technology journeys and case stories",
        "In-depth explorations"
      ],
      "audience": "Readers who want deeper context, narrative and insight rather than short technology updates."
    }
  },
  "business": {
    "business-news": {
      "intro": "Business News follows important developments affecting companies, organisations, markets and the wider commercial environment.",
      "topics": [
        "Business developments",
        "Company and organisational news",
        "Industry movements",
        "Commercial trends",
        "Business environment changes"
      ],
      "audience": "Business owners, professionals, entrepreneurs, students and readers following the commercial environment."
    },
    "entrepreneurship": {
      "intro": "The Business Entrepreneurship section explores entrepreneurial thinking within the wider business environment, including venture creation, opportunity recognition and business-building.",
      "topics": [
        "Entrepreneurial strategy",
        "Business creation",
        "Founders and ventures",
        "Opportunity development",
        "Entrepreneurial decision-making"
      ],
      "audience": "Entrepreneurs, aspiring founders, students and professionals interested in building businesses."
    },
    "strategy": {
      "intro": "Strategy examines how organisations make choices about direction, positioning, resources, competition and long-term development.",
      "topics": [
        "Business strategy",
        "Strategic planning",
        "Competitive positioning",
        "Decision-making",
        "Organisational priorities"
      ],
      "audience": "Business leaders, managers, entrepreneurs and students of business and management."
    },
    "business-growth": {
      "intro": "Business Growth focuses on the practical realities of expanding an organisation, improving performance and developing sustainable growth.",
      "topics": [
        "Scaling businesses",
        "Customer and market growth",
        "Operational improvement",
        "Performance management",
        "Sustainable expansion"
      ],
      "audience": "Business owners, founders and managers working to develop and scale organisations."
    },
    "markets": {
      "intro": "Markets examines industries, commercial environments, market movements and opportunities that influence business decisions.",
      "topics": [
        "Industry developments",
        "Market opportunities",
        "Consumer and customer trends",
        "Competitive environments",
        "Commercial patterns"
      ],
      "audience": "Business professionals, entrepreneurs, investors and readers interested in commercial environments."
    },
    "organisations": {
      "intro": "Organisations explores how organisations are structured, managed and developed, including operations, culture, governance and organisational effectiveness.",
      "topics": [
        "Organisational structures",
        "Operations and processes",
        "Workplace culture",
        "Governance and accountability",
        "Organisational development"
      ],
      "audience": "Leaders, managers, administrators, professionals and students interested in organisational systems."
    },
    "business-guides": {
      "intro": "Business Guides provides practical knowledge for people starting, managing, improving or developing organisations.",
      "topics": [
        "Business planning",
        "Operational guidance",
        "Management practices",
        "Business processes",
        "Practical decision-making"
      ],
      "audience": "Entrepreneurs, business owners, managers and people developing practical business knowledge."
    },
    "features": {
      "intro": "Business Features provides deeper stories about organisations, markets, entrepreneurs, business decisions and the people behind commercial activity.",
      "topics": [
        "Business profiles",
        "Founder and organisation stories",
        "Industry features",
        "Long-form business analysis",
        "Business journeys"
      ],
      "audience": "Readers looking for deeper business stories and context."
    }
  },
  "innovation": {
    "innovation-news": {
      "intro": "Innovation News follows new developments in ideas, products, startups, research and approaches that are changing how problems are solved.",
      "topics": [
        "Innovation developments",
        "New ventures and initiatives",
        "Product innovation",
        "Research developments",
        "Innovation ecosystems"
      ],
      "audience": "Readers interested in new ideas and developments across the innovation landscape."
    },
    "ideas": {
      "intro": "Ideas explores concepts, experiments and new approaches to solving problems, creating value and improving existing systems.",
      "topics": [
        "New concepts",
        "Problem-solving approaches",
        "Creative thinking",
        "Experiments and prototypes",
        "New models and approaches"
      ],
      "audience": "Innovators, entrepreneurs, students, creators and readers interested in new ways of thinking."
    },
    "startups": {
      "intro": "Startups examines emerging companies, startup ecosystems, founders, products and the challenges involved in building new ventures.",
      "topics": [
        "Startup journeys",
        "Founders and teams",
        "Startup ecosystems",
        "Products and business models",
        "Growth challenges"
      ],
      "audience": "Founders, aspiring entrepreneurs, investors, students and startup enthusiasts."
    },
    "products": {
      "intro": "Products explores innovative products and services from the ideas behind them through development, launch, adoption and evolution.",
      "topics": [
        "Product development",
        "Digital products",
        "Innovative services",
        "Product-market fit",
        "Product experiences"
      ],
      "audience": "Product builders, entrepreneurs, innovators and readers interested in how new products are created."
    },
    "research": {
      "intro": "Research examines research activity, discoveries, experimentation and knowledge development that contribute to innovation.",
      "topics": [
        "Research findings",
        "Experiments and studies",
        "Applied research",
        "Knowledge development",
        "Research-driven innovation"
      ],
      "audience": "Students, researchers, innovators and readers interested in knowledge-driven development."
    },
    "emerging-trends": {
      "intro": "Emerging Trends identifies new patterns and developments that may influence innovation, technology, business and society.",
      "topics": [
        "New innovation patterns",
        "Emerging business models",
        "Technology trends",
        "Changing consumer behaviour",
        "Future-facing developments"
      ],
      "audience": "Readers interested in understanding where innovation and technology may be heading."
    },
    "case-studies": {
      "intro": "Innovation Case Studies examines real examples of ideas being transformed into products, services, systems and practical solutions.",
      "topics": [
        "Innovation projects",
        "Product development journeys",
        "Organisational innovation",
        "Lessons from implementation",
        "Innovation outcomes"
      ],
      "audience": "Innovators, organisations, students and practitioners looking for practical examples."
    },
    "features": {
      "intro": "Innovation Features tells deeper stories about ideas, innovators, products, research and the journeys behind meaningful innovation.",
      "topics": [
        "Innovator profiles",
        "Innovation journeys",
        "Long-form product stories",
        "Research stories",
        "Deep innovation features"
      ],
      "audience": "Readers seeking deeper context around innovation and the people behind it."
    }
  },
  "digital-transformation": {
    "digital-strategy": {
      "intro": "Digital Strategy examines how organisations develop purposeful approaches to using technology to improve services, operations, experiences and long-term value.",
      "topics": [
        "Digital strategy development",
        "Technology roadmaps",
        "Digital priorities",
        "Business and technology alignment",
        "Digital value creation"
      ],
      "audience": "Leaders, ICT teams, managers and organisations planning digital transformation."
    },
    "digitalisation": {
      "intro": "Digitalisation explores the transition from manual or traditional processes toward digitally enabled services, information flows and operations.",
      "topics": [
        "Process digitalisation",
        "Digital services",
        "Information digitisation",
        "Workflow transformation",
        "Digital operating models"
      ],
      "audience": "Organisations and professionals interested in moving processes and services into digital environments."
    },
    "automation": {
      "intro": "Automation examines how organisations use technology to reduce repetitive work, improve workflows and create more efficient operating processes.",
      "topics": [
        "Workflow automation",
        "Business process automation",
        "Intelligent workflows",
        "Automation tools",
        "Operational efficiency"
      ],
      "audience": "Organisations, managers, developers and professionals exploring practical automation."
    },
    "technology-adoption": {
      "intro": "Technology Adoption explores how organisations evaluate, select, introduce and embed new technologies into real working environments.",
      "topics": [
        "Technology evaluation",
        "Implementation planning",
        "User adoption",
        "Change readiness",
        "Technology integration"
      ],
      "audience": "Decision-makers, ICT teams, managers and organisations adopting new technology."
    },
    "organisational-change": {
      "intro": "Organisational Change examines the people, processes, structures and culture involved when organisations transform how they work.",
      "topics": [
        "Change management",
        "Organisational culture",
        "People and transformation",
        "Process redesign",
        "Transformation leadership"
      ],
      "audience": "Managers, leaders, transformation teams and professionals involved in organisational change."
    },
    "case-studies": {
      "intro": "Digital Transformation Case Studies examines real-world examples of organisations introducing digital systems, changing processes and adapting their operating models.",
      "topics": [
        "Transformation journeys",
        "Implementation experiences",
        "Digital projects",
        "Lessons learned",
        "Transformation outcomes"
      ],
      "audience": "Organisations and professionals looking for practical examples of digital transformation."
    },
    "guides": {
      "intro": "Digital Transformation Guides provides practical material for organisations planning, implementing and improving digital transformation initiatives.",
      "topics": [
        "Transformation planning",
        "Digital readiness",
        "Implementation guidance",
        "Technology selection",
        "Change planning"
      ],
      "audience": "Leaders, ICT professionals, managers and organisations beginning or improving transformation programmes."
    },
    "features": {
      "intro": "Digital Transformation Features explores deeper stories about organisations, technologies and people navigating major digital change.",
      "topics": [
        "Transformation stories",
        "Digital leadership",
        "Organisational journeys",
        "Technology-enabled change",
        "Long-form case narratives"
      ],
      "audience": "Readers seeking deeper understanding of digital transformation in practice."
    }
  },
  "leadership": {
    "leadership": {
      "intro": "Leadership explores the principles, practices and experiences involved in guiding people, organisations and initiatives toward meaningful goals.",
      "topics": [
        "Leadership principles",
        "Leadership practice",
        "Decision-making",
        "Leadership development",
        "Leadership challenges"
      ],
      "audience": "Current and aspiring leaders, managers, students and professionals."
    },
    "management": {
      "intro": "Management examines the practical work of planning, organising, coordinating and improving organisational performance.",
      "topics": [
        "Management practice",
        "Team management",
        "Performance",
        "Planning and execution",
        "Management challenges"
      ],
      "audience": "Managers, supervisors, entrepreneurs and professionals developing management capability."
    },
    "governance": {
      "intro": "Governance explores the structures, systems and practices used to provide accountability, oversight, direction and responsible organisational stewardship.",
      "topics": [
        "Governance structures",
        "Accountability",
        "Oversight",
        "Policies and controls",
        "Organisational stewardship"
      ],
      "audience": "Leaders, board members, administrators, governance professionals and students."
    },
    "people": {
      "intro": "People examines the human side of organisations, including culture, teams, relationships, collaboration and the experiences of people at work.",
      "topics": [
        "Workplace culture",
        "Teams and collaboration",
        "People management",
        "Organisational relationships",
        "Employee experience"
      ],
      "audience": "Leaders, managers, professionals and readers interested in people and organisations."
    },
    "career": {
      "intro": "Career provides perspectives and practical knowledge around professional development, skills, opportunities and navigating working life.",
      "topics": [
        "Career development",
        "Professional skills",
        "Workplace growth",
        "Career planning",
        "Professional opportunities"
      ],
      "audience": "Students, graduates, professionals and people developing their careers."
    },
    "executive-insights": {
      "intro": "Executive Insights brings together perspectives on leadership, strategy, organisational decisions and experiences from people operating in senior roles.",
      "topics": [
        "Executive decision-making",
        "Leadership experience",
        "Strategic thinking",
        "Organisational leadership",
        "Executive perspectives"
      ],
      "audience": "Leaders, executives, managers and readers interested in senior-level organisational perspectives."
    },
    "leadership-stories": {
      "intro": "Leadership Stories explores the people, experiences, decisions and journeys that illustrate leadership in practice.",
      "topics": [
        "Leader profiles",
        "Leadership journeys",
        "Difficult decisions",
        "Leadership lessons",
        "Personal experiences"
      ],
      "audience": "Readers interested in the human stories behind leadership."
    },
    "features": {
      "intro": "Leadership Features provides deeper examinations of leadership, management, governance and organisational life.",
      "topics": [
        "Leadership profiles",
        "Long-form leadership stories",
        "Management features",
        "Governance stories",
        "Organisational leadership"
      ],
      "audience": "Readers seeking deeper perspectives on leadership and organisations."
    }
  },
  "entrepreneurship": {
    "starting-a-business": {
      "intro": "Starting a Business provides practical knowledge for moving from an idea toward establishing a functioning business.",
      "topics": [
        "Business ideas and validation",
        "Planning a business",
        "Early operations",
        "Customers and markets",
        "Building a foundation"
      ],
      "audience": "Aspiring entrepreneurs and people preparing to launch businesses."
    },
    "startups": {
      "intro": "Startups focuses specifically on new ventures, their founders, products, business models and journeys through early-stage development.",
      "topics": [
        "Startup building",
        "Founders and teams",
        "Products and markets",
        "Startup ecosystems",
        "Early-stage growth"
      ],
      "audience": "Founders, aspiring entrepreneurs, startup teams and students."
    },
    "business-ideas": {
      "intro": "Business Ideas explores opportunities, concepts and business models that can be developed into sustainable ventures.",
      "topics": [
        "Business opportunities",
        "Business models",
        "Market problems",
        "Idea development",
        "Opportunity evaluation"
      ],
      "audience": "People exploring entrepreneurship and looking for ways to identify viable opportunities."
    },
    "funding": {
      "intro": "Funding examines the different ways businesses and startups can plan for, obtain and manage financial resources.",
      "topics": [
        "Startup funding",
        "Investment",
        "Financial planning",
        "Capital requirements",
        "Funding preparation"
      ],
      "audience": "Entrepreneurs, founders and business owners seeking to understand business financing."
    },
    "growth": {
      "intro": "Entrepreneurial Growth explores how ventures develop customers, operations, teams, markets and sustainable growth systems.",
      "topics": [
        "Scaling ventures",
        "Customer growth",
        "Market expansion",
        "Operational scaling",
        "Sustainable growth"
      ],
      "audience": "Founders and entrepreneurs moving beyond the earliest stages of business development."
    },
    "founders": {
      "intro": "Founders focuses on the people behind entrepreneurial ventures, including their decisions, challenges, experiences and lessons.",
      "topics": [
        "Founder journeys",
        "Founder decisions",
        "Building teams",
        "Entrepreneurial challenges",
        "Founder lessons"
      ],
      "audience": "Entrepreneurs, aspiring founders and readers interested in the human side of venture building."
    },
    "entrepreneur-stories": {
      "intro": "Entrepreneur Stories presents journeys of people who have built, attempted, adapted or grown entrepreneurial ventures.",
      "topics": [
        "Founder stories",
        "Business journeys",
        "Lessons from experience",
        "Entrepreneurial challenges",
        "Venture development"
      ],
      "audience": "Readers looking for practical lessons and inspiration through real entrepreneurial experiences."
    },
    "guides": {
      "intro": "Entrepreneurship Guides provides practical resources for entrepreneurs at different stages of building and developing a venture.",
      "topics": [
        "Entrepreneurship fundamentals",
        "Business planning",
        "Operations",
        "Growth planning",
        "Practical business skills"
      ],
      "audience": "Aspiring and active entrepreneurs seeking practical guidance."
    }
  },
  "community": {
    "community-stories": {
      "intro": "Community Stories highlights people, organisations, initiatives and experiences that reflect the realities, challenges and progress of communities.",
      "topics": [
        "Community experiences",
        "Local initiatives",
        "People and organisations",
        "Community achievements",
        "Human-interest stories"
      ],
      "audience": "Readers interested in people, communities and initiatives creating meaningful local impact."
    },
    "education": {
      "intro": "Education explores learning, students, educators, institutions, skills development and the changing educational environment.",
      "topics": [
        "Students and learning",
        "Education institutions",
        "Teaching and learning",
        "Skills development",
        "Education innovation"
      ],
      "audience": "Students, educators, institutions, parents and readers interested in education."
    },
    "health": {
      "intro": "Health covers health, wellbeing, healthcare and community health matters through accessible informational and human-centred stories.",
      "topics": [
        "Health and wellbeing",
        "Healthcare access",
        "Community health",
        "Health education",
        "Health-related initiatives"
      ],
      "audience": "General readers, communities and organisations interested in health and wellbeing."
    },
    "social-impact": {
      "intro": "Social Impact examines initiatives, programmes and organisations working to create positive change in communities and society.",
      "topics": [
        "Social programmes",
        "Impact initiatives",
        "Non-profit organisations",
        "Community interventions",
        "Impact stories"
      ],
      "audience": "Community organisations, social enterprises, volunteers and readers interested in social change."
    },
    "youth": {
      "intro": "Youth focuses on young people, their voices, opportunities, participation, development and contribution to society.",
      "topics": [
        "Youth opportunities",
        "Youth voices",
        "Skills and development",
        "Youth participation",
        "Young innovators and leaders"
      ],
      "audience": "Young people, educators, organisations and readers interested in youth development."
    },
    "community-development": {
      "intro": "Community Development explores the processes through which communities build capacity, resilience, opportunity and local progress.",
      "topics": [
        "Community development",
        "Local initiatives",
        "Participation",
        "Community resilience",
        "Development programmes"
      ],
      "audience": "Community leaders, development organisations, practitioners and interested readers."
    },
    "people": {
      "intro": "People focuses on individuals whose experiences, work, achievements and journeys provide meaningful stories for the wider community.",
      "topics": [
        "People profiles",
        "Human-interest stories",
        "Personal journeys",
        "Community contributors",
        "People and experiences"
      ],
      "audience": "Readers interested in the people behind community stories and developments."
    },
    "features": {
      "intro": "Community Features provides deeper human-centred stories examining people, communities, initiatives and issues in greater detail.",
      "topics": [
        "Long-form community stories",
        "People profiles",
        "Community journeys",
        "Social issues",
        "Human-interest features"
      ],
      "audience": "Readers looking for deeper context and richer community storytelling."
    }
  },
  "media": {
    "media-industry": {
      "intro": "Media Industry examines developments in journalism, broadcasting, digital media, content businesses and the wider media environment.",
      "topics": [
        "Media industry developments",
        "Digital media",
        "Media business models",
        "Audience trends",
        "Industry transformation"
      ],
      "audience": "Media professionals, creators, students and readers interested in the changing media landscape."
    },
    "nexus-hub-tv": {
      "intro": "Nexus Hub TV provides a dedicated editorial space for programmes, developments, stories and perspectives connected to the Nexus Hub television and video platform.",
      "topics": [
        "Nexus Hub TV programmes",
        "Video stories",
        "Production developments",
        "Featured broadcasts",
        "TV and digital video"
      ],
      "audience": "Nexus Hub audiences and readers interested in video-led storytelling and broadcasting."
    },
    "football": {
      "intro": "Football covers football stories, people, competitions, teams, developments and the wider culture surrounding the sport.",
      "topics": [
        "Football stories",
        "Teams and players",
        "Competitions",
        "Football communities",
        "Sport and culture"
      ],
      "audience": "Football audiences and readers interested in the people and stories around the game."
    },
    "stories": {
      "intro": "Media Stories focuses on narrative storytelling, profiles, experiences and human-interest pieces designed to bring people and events into context.",
      "topics": [
        "Profiles",
        "Human-interest stories",
        "Narrative journalism",
        "Experiences and journeys",
        "People and events"
      ],
      "audience": "Readers who value storytelling and deeper human context."
    },
    "voices": {
      "intro": "Voices creates space for conversations, interviews, perspectives and contributions from people with experiences or ideas worth hearing.",
      "topics": [
        "Interviews",
        "Conversations",
        "Personal perspectives",
        "Expert voices",
        "Community voices"
      ],
      "audience": "Readers interested in hearing directly from people and understanding different perspectives."
    },
    "content-creation": {
      "intro": "Content Creation explores the work behind digital content, including creators, production processes, storytelling formats and creative practice.",
      "topics": [
        "Content creators",
        "Production workflows",
        "Digital storytelling",
        "Creative formats",
        "Creator economy"
      ],
      "audience": "Creators, media teams, students and people interested in producing digital content."
    },
    "broadcasting": {
      "intro": "Broadcasting examines television, radio, video production, distribution and the technologies transforming broadcast media.",
      "topics": [
        "Television",
        "Radio",
        "Video production",
        "Broadcast technology",
        "Distribution and audiences"
      ],
      "audience": "Broadcasters, media professionals, creators, students and interested audiences."
    },
    "features": {
      "intro": "Media Features provides long-form explorations of media, broadcasting, creators, stories and the people shaping the media environment.",
      "topics": [
        "Media profiles",
        "Creator stories",
        "Broadcast features",
        "Long-form storytelling",
        "Media industry features"
      ],
      "audience": "Readers seeking deeper stories and perspectives from the media world."
    }
  }
} as const;

export function getBlogSectionContent(
  categorySlug: string,
  sectionSlug: string,
) {
  return blogSectionContent[categorySlug]?.[sectionSlug];
}
