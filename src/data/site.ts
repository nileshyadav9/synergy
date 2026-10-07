export const siteConfig = {
  companyName: "SYNERGY",
  descriptor: "Technology, together.",
  email: "hello@synergy.tech",
  phone: "+1 (415) 555-0148",
  linkedIn: "https://www.linkedin.com/",
  navigation: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Expertise", href: "#expertise" },
    { label: "Engagement Models", href: "#engagements" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    {
      title: "Software engineering",
      description:
        "Full-stack, backend, frontend, mobile and cloud development.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud architecture, infrastructure, DevOps and platform engineering.",
    },
    {
      title: "Data & AI",
      description:
        "Data engineering, analytics, machine learning and applied AI.",
    },
    {
      title: "Cybersecurity",
      description:
        "Security engineering, risk management and resilient operations.",
    },
    {
      title: "Enterprise technology",
      description:
        "Architecture, modernization, integrations and transformation.",
    },
    {
      title: "Quality engineering",
      description: "Test automation, quality strategy and dependable CI/CD.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Define",
      description: "Understand the business and technical requirements.",
    },
    {
      number: "02",
      title: "Match",
      description: "Identify the right specialists from our talent network.",
    },
    {
      number: "03",
      title: "Integrate",
      description: "Consultants join your team's tools and workflows.",
    },
    {
      number: "04",
      title: "Deliver",
      description: "Focus on measurable technical and business outcomes.",
    },
  ],
  technologies: [
    "React",
    "Node.js",
    "Java",
    ".NET",
    "Python",
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Snowflake",
    "Databricks",
    "OpenAI",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
  ],
  engagements: [
    {
      title: "Staff augmentation",
      description:
        "Add individual specialists to your existing engineering organization.",
    },
    {
      title: "Dedicated teams",
      description:
        "Deploy a complete cross-functional team around a project or product.",
    },
    {
      title: "Consulting & delivery",
      description:
        "Bring in senior technical expertise to solve complex challenges.",
    },
  ],
  stats: [
    { value: 15, suffix: "+", label: "Years of experience" },
    { value: 250, suffix: "+", label: "Technology specialists" },
    { value: 500, suffix: "+", label: "Projects supported" },
    { value: 95, suffix: "%", label: "Client retention" },
  ],
  industries: [
    "Financial services",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Logistics",
    "Technology",
    "Government",
    "Professional services",
  ],
  testimonial: {
    quote:
      "Finding the right engineering expertise shouldn't slow down your roadmap. Their team gave us the specialists we needed and integrated seamlessly into our organization.",
    attribution: "CTO",
    role: "Illustrative quote · Enterprise technology company",
  },
  contactTopics: [
    "Scale an engineering team",
    "Find a specialist",
    "Plan a transformation",
    "Explore a partnership",
    "Something else",
  ],
} as const;
