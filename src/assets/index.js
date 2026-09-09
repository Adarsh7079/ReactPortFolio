import project1 from "../assets/shopping.png";


export const HERO_CONTENT = `I’m a full-stack developer who builds scalable, user-focused products with React, Next.js, TypeScript, Node.js, and AI integrations. At HashedIn by Deloitte, I work on enterprise experiences used by 50k+ monthly users, improving performance, reusable UI systems, and delivery quality.

I care about clean architecture, measurable outcomes, and interfaces that feel simple to use. My work spans frontend systems, REST APIs, authentication, testing, database design, and AI-enabled workflows.`;

export const ABOUT_TEXT = `I am a full-stack developer with experience turning product requirements into reliable, accessible web applications. My day-to-day toolkit includes React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication.

I have helped ship products for enterprise, real estate, and healthcare audiences. I enjoy the details that make software dependable: thoughtful component design, fast page loads, clear API contracts, automated tests, secure data flows, and collaboration across design and engineering teams.
`;

export const EXPERIENCES = [
    {
    year: "April/2025- Present",
    role: "Software Engineer",
    company: "Hashedin by Deloitte",
    description: `Built responsive React and Tailwind CSS features for a product serving 50k+ monthly users, improving Largest Contentful Paint by 28% and strengthening Core Web Vitals.

  Created a versioned component library adopted by 8 teams, reducing duplicated UI work by 60%. Used feature flags and A/B testing to reduce rollback incidents by 80% while contributing to a 9% uplift in task completion.

  Improved client performance through code splitting, memoization, caching, and leaner API usage, reducing bundle size by 18% and redundant API calls by 55%. Also contributed to AI-driven product initiatives and cross-functional delivery.
`,
    technologies: ["React.js", "TypeScript", "Next.js", "AI Integration", "Tailwind CSS", "Testing", "Performance"],
  },
  {
    year: "Sep/2024-April/2025",
    role: "FullStack Developer",
    company: "Property Station",
    description: `Launched high-performance real estate landing pages with a 95% Google PageSpeed score across desktop and mobile, supporting stronger organic search performance.

  Built responsive interfaces with HTML, CSS, React.js, and Tailwind CSS. Worked directly with international real estate clients to translate requirements into tailored websites that improved user engagement by 60% within the first quarter after launch.

  Developed RESTful API integrations with MongoDB and collaborated with stakeholders to deliver maintainable, production-ready web solutions.`,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "MongoDB", "Express.js", "Node.js", "REST APIs", "SEO"],
  },

  {
    year: "oct/2023-jan/2024",
    role: "SDE Intern",
    company: "CodroidHub",
    description: `working with  team in developing and maintaining web applications using JavaScript, React.js, and Node.js.
     Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements 
     and timelines.`,
    technologies: ["Javascript", "React.js", "Tailwind", "mongoDB","Express","Node.js"],
  },
  {
    year: "july/2023 - oct/2023",
    role: "Dev Intern ",
    company: "Vector3",
    description: `Designed and developed user interfaces for web applications using HTML, CSS , JavaScript, React.js and React.
     Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs 
     and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL","Node.js"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    GitHub:`https://github.com/Adarsh7079/Akart`,
    description:
      "A production-like MERN e-commerce application with RESTful APIs and full CRUD workflows for products, users, and orders. Added responsive React interfaces, JWT and bcrypt authentication, and authorization flows tested with 100+ users.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "bcrypt"],
  },
  {
    title: "Indian Psychiatric Society",
    website: "https://indianpsychiatricsociety.org/",
    GitHub: "https://github.com/Adarsh7079/PPS.git",
    brand: "IPS",
    description:
      "Frontend contribution to the official Indian Psychiatric Society website, creating a clear, responsive experience for members and visitors with accessible content and polished responsive UI.",
    technologies: ["React.js", "Responsive UI", "Accessibility", "Performance"],
  },
  {
    title: "Patliputra Psychiatric Society",
    website: "https://pps-snowy.vercel.app/",
    GitHub: "https://github.com/Adarsh7079/PPS.git",
    brand: "PPS",
    description:
      "Built a custom medical-domain frontend used by roughly 500 healthcare professionals and patients during pilot trials. The clinician- and patient-focused interface shortened appointment lookup and form submission tasks by about 25% in user tests.",
    technologies: ["React.js", "Responsive Design", "Healthcare UX", "User Testing"],
  }
];

export const CONTACT = {
  address: "Siwan , Bihar , 841417",
  phoneNo: "+91-7079429676",
  email: "adarshk8271@gmail.com",
};


export const CODING=[
  {
    name:`LeetCode`,
    image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYMP7mauTOEchnNKlZsc9gRM0_UTB7r4gpJTlGGl3A05ph7DjWUOjUBJ62Zm1Sb-VvhM&usqp=CAU`,
    description:`I have achieved 3* at LeetCode `,
    profile:`https://leetcode.com/looser8271/`
  },
  {
    name:`GeeksForgeeks`,
    image:`https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png`,
    description:` Achieved Institute Rank 1st at GeeksForGeeks `,
    profile:`https://auth.geeksforgeeks.org/user/paritoshadarsh/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user`
  },
  {
    name:`Codingninjas`,
    image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQL6ns3J6kp5M55CeUhVd5DvqOyXtO0hin9oskm3dC7g&s`,
    description:`I am Expert At Code Studio `,
    profile:`https://www.naukri.com/code360/profile/Adarsh_7079`
  },
  {
    name:`CodeChef`,
    image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvm-5Fad8XKQMlk2YqYW5fae7lZfU-fh6Khkuh4j4AqQ&s`,
    description:`I am 2* coder at CodeChef `,
    profile:`https://www.codechef.com/users/adarsh_7079`
  }
]
