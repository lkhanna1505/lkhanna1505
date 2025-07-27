import {
  algorithms,
  devnotes,
  oscs,
  lkdb,
  mavis,
  model,
  mkjournal, lckiller
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "SAP ABAP Trainee and Intern",
    company_name: "India Glycols Limited",
    date: "Jun 2025 - Jul 2025",
    details: [
      "Selenium LinkedIn Scraper: Created a web scraper that helps to search for 100 profiles of working professionals from any location, extracting their current and previous companies of work and duration with 100% efficiency. You can search for any number of locations at any time.",
      "ABAP - SAP: Worked on the SAP portal and learnt about reports in ABAP, creating programs that helped to handle and manipulate SAP tables and company data.",
      "Tools, Frameworks, and Libraries: Python-Selenium, BeautifulSoup, tkinter, Requests, threading, json; SAP-Reports, Database Tables, Module Pool Programming, Debugging",
    ],
  },
  // {
  //   title: "Software Developer",
  //   company_name: "Indie",
  //   date: "2019 - 2023",
  //   details: [
  //     "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
  //     "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
  //     "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
  //   ],
  // },
  // {
  //   title: "Software Engineer",
  //   company_name: "Prime 3",
  //   date: "2018 - 2019",
  //   details: [
  //     "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
  //     "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
  //     "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
  //   ],
  // },
  // {
  //   title: "Computer Science",
  //   company_name: "ODU",
  //   date: "2015 - 2018",
  //   details: [
  //     "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
  //     "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
  //     "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
  //   ],
  // },
];

export const portfolio = [
  {
    name: "Personal DBMS",
    description:
      "LKDB is an embedded, high-performance key-value store featuring ACID compliance, customizable indexing, in-memory caching, write-ahead logging, and optimized on-disk storage — ideal for low-latency, resource-constrained applications.",
    image: lkdb,
    github: "https://www.github.com/lkhanna1505",
  },
  {
    name: "Mavis - Your very own AI assistant",
    description: "Mavis is an AI-powered query and database management tool that transforms raw .md files into a searchable, context-aware knowledge base using Google Gemini and Chroma. Designed to provide story-like, contextual responses with relevance scoring, Mavis brings data to life, making it easy to extract meaningful insights with a single query.",
    image: mavis,
    github: "https://github.com/lkhanna1505/Mavis",
  },
  {
    name: "Solubility Prediction Model",
    description: "This project compares the performance of Linear Regression and Random Forest Regression models in predicting the solubility of chemical compounds based on molecular descriptors. Using a dataset of molecular features and solubility values, the models are trained and evaluated using Mean Squared Error (MSE) and R-squared metrics. The analysis includes visualizations of the predicted vs. actual values for both models, providing insight into their predictive accuracy and potential overfitting.",
    image: model,
    github: "https://github.com/lkhanna1505/fullstack_solubility_prediction",
  },
  {
    name: "Mark-Up Journal",
    description:
      "A responsive, interactive personal journal web application built with HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS. It features dynamic JSON-based data loading, multiple view modes (chronological and daily), and a full-screen reading interface. The app showcases advanced UX design with smooth animations, real-time feedback, and intuitive navigation. It includes asynchronous data fetching, client-side data processing (sorting, filtering, grouping), and responsive layouts using Flexbox and CSS Grid. Designed as a modular, single-page application with a focus on performance, accessibility, and mobile-first design.",
    image: mkjournal,
    github: "https://github.com/lkhanna1505/markUpJournal",
  },
  {
    name: "LeetCode Killer",
    description:
      "A Python-powered automation suite that transforms LeetCode practice into an effortless experience. Built with Selenium, BeautifulSoup, and JSON, it scrapes verified solutions, auto-launches problems in Chrome, pastes solutions, and tracks progress in real-time. Featuring stealth tactics, human-like emulation, and interruption-resilient saving, this modular tool demonstrates advanced skills in web scraping, browser automation, concurrency, and anti-bot engineering. The ultimate productivity booster for LeetCode warriors.",
    image: lckiller,
    github: "https://LeetCode-Killer.vercel.app", // <-- Replace with your actual repo URL
  },
];

export { experiences };

