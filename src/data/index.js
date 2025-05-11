import {
  algorithms,
  devnotes,
  oscs,
  lkdb,
  mavis,
  model,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Lakshya",
  },
  {
    id: "portfolio",
    title: "Projects",
  },
  // {
  //   id: "experience",
  //   title: "Experience",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2016 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indie",
    date: "2019 - 2023",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prime 3",
    date: "2018 - 2019",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "ODU",
    date: "2015 - 2018",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
    ],
  },
];

export const portfolio = [
  {
    name: "Personal DBMS",
    description:
      "LKDB is an embedded, high-performance key-value store featuring ACID compliance, customizable indexing, in-memory caching, write-ahead logging, and optimized on-disk storage — ideal for low-latency, resource-constrained applications.",
    image: lkdb,
  },
  {
    name: "Mavis - Your very own AI assistant",
    description: "Mavis is an AI-powered query and database management tool that transforms raw .md files into a searchable, context-aware knowledge base using Google Gemini and Chroma. Designed to provide story-like, contextual responses with relevance scoring, Mavis brings data to life, making it easy to extract meaningful insights with a single query.",
    image: mavis,
  },
  {
    name: "Solubility Prediction Model",
    description: "This project compares the performance of Linear Regression and Random Forest Regression models in predicting the solubility of chemical compounds based on molecular descriptors. Using a dataset of molecular features and solubility values, the models are trained and evaluated using Mean Squared Error (MSE) and R-squared metrics. The analysis includes visualizations of the predicted vs. actual values for both models, providing insight into their predictive accuracy and potential overfitting.",
    image: model,
  },
];

export { experiences };

