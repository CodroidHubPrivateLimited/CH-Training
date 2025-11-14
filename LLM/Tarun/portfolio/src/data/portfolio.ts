export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  type: 'post' | 'project'
}

export interface BlogPost {
  id: number
  title: string
  description: string
  link: string
  tags: string[]
}

export interface Certificate {
  name: string
  image: string
  issuer: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Data Science EDA Analysis",
    description: "Comprehensive exploratory data analysis showcasing data visualization and statistical insights.",
    tags: ["Data Science", "EDA", "Data Analysis", "Python"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_datascience-eda-dataanalysis-activity-7227205979682041857-T3x_",
    type: "post"
  },
  {
    id: 2,
    title: "Power BI Dashboard",
    description: "Interactive business intelligence dashboard with modern visualizations and data insights.",
    tags: ["Power BI", "Data Visualization", "Business Intelligence"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_powerbi-datamadesimple-businesstools-activity-7227706218885095424-1lyH",
    type: "post"
  },
  {
    id: 3,
    title: "Advanced Power BI Analytics",
    description: "Advanced data analysis and visualization techniques using Power BI for business insights.",
    tags: ["Power BI", "Data Analysis", "Data Visualization"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_powerbi-dataanalysis-datavisualization-activity-7227925112102998017-q52q",
    type: "post"
  },
  {
    id: 4,
    title: "AI/ML Project Showcase",
    description: "Artificial Intelligence and Machine Learning project demonstrating modern AI techniques.",
    tags: ["AI/ML", "Artificial Intelligence", "Machine Learning"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_aiml-artificialintelligence-machinelearning-activity-7255902017666068481-RX0z",
    type: "post"
  },
  {
    id: 5,
    title: "NLP Tokenization System",
    description: "Natural Language Processing tokenization system with advanced NLP techniques.",
    tags: ["Tokenization", "NLP", "AI"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_tokenization-nlp-ai-activity-7351177661282439169-CA_o",
    type: "post"
  },
  {
    id: 6,
    title: "Twitter Sentiment Analyzer",
    description: "Real-time sentiment analysis tool for social media data using machine learning.",
    tags: ["Sentiment Analysis", "Machine Learning", "Twitter API"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_twitter-sentiment-analyzer-activity-7353826513881886722-t2Rp",
    type: "post"
  },
  {
    id: 7,
    title: "Kore.ai Chatbot with OTP Verification",
    description: "Advanced chatbot development with secure OTP verification system.",
    tags: ["Kore.ai", "Chatbot Development", "OTP Verification"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_koreai-chatbotdevelopment-otpverification-activity-7358443506371121152-Pnc6",
    type: "post"
  },
  {
    id: 8,
    title: "Secure Chatbot Authentication",
    description: "Implementation of secure OTP verification for chatbot systems.",
    tags: ["Kore.ai", "OTP Verification", "Chatbot Security"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_koreai-otpverification-chatbotsecurity-activity-7358768982746673152-R0LY",
    type: "post"
  },
  {
    id: 9,
    title: "Employee Management Chatbot",
    description: "HR technology solution with intelligent chatbot for employee management.",
    tags: ["Employee Management", "HR Tech", "Chatbot Solutions"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_employeemanagement-hrtech-chatbotsolutions-activity-7365701195899809792-oJMO",
    type: "post"
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Advanced NLP Techniques",
    description: "Deep dive into Natural Language Processing and AI applications in modern development.",
    tags: ["NLP", "AI", "Machine Learning"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_nlp-ai-machinelearning-activity-7351570356614201348-7X6R"
  },
  {
    id: 2,
    title: "Generative AI Revolution",
    description: "Exploring the latest developments in Generative AI and its impact on various industries.",
    tags: ["Generative AI", "NLP", "AI/ML"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_generativeai-nlp-aiml-activity-7353059816564559875-yeqi"
  },
  {
    id: 3,
    title: "Hugging Face: From Teen Chatbot to AI Community",
    description: "The journey of Hugging Face and its transformation into a leading AI community platform.",
    tags: ["Hugging Face", "AI Community", "Machine Learning"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_hugging-face-from-teen-chatbot-to-ai-community-activity-7354429569031966720-b7Om"
  },
  {
    id: 4,
    title: "Future of AI in Chatbot Development",
    description: "Insights into artificial intelligence applications in modern chatbot development.",
    tags: ["Artificial Intelligence", "Chatbot Development", "AI"],
    link: "https://www.linkedin.com/posts/tarunkumar2026_artificialintelligence-chatbotdevelopment-activity-7366712988885532672-7Nik"
  }
]

export const certificates: Certificate[] = [
  {
    name: "AI & Machine Learning",
    image: "/assets/certificates/AIML.png",
    issuer: "Professional Certification"
  },
  {
    name: "GitHub",
    image: "/assets/certificates/Github.png",
    issuer: "GitHub"
  },
  {
    name: "LinkedIn",
    image: "/assets/certificates/LinkedIn.png",
    issuer: "LinkedIn Learning"
  },
  {
    name: "Power BI",
    image: "/assets/certificates/PowerBI.png",
    issuer: "Microsoft"
  },
  {
    name: "Prompt Engineering",
    image: "/assets/certificates/PromptEngineering.png",
    issuer: "Professional Certification"
  }
]

export const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "JavaScript", level: 85, category: "Programming" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Machine Learning", level: 87, category: "AI/ML" },
  { name: "NLP", level: 85, category: "AI/ML" },
  { name: "Power BI", level: 90, category: "Data Analysis" },
  { name: "Tableau", level: 88, category: "Data Analysis" },
  { name: "Kore.ai", level: 92, category: "AI/ML" },
  { name: "Data Science", level: 88, category: "Data Analysis" },
  { name: "Chatbot Development", level: 85, category: "AI/ML" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "SQL", level: 85, category: "Database" },
  { name: "Git", level: 90, category: "Tools" }
]
