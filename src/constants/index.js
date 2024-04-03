import project1 from "../assets/shopping.png";
import project2 from "../assets/chat.png";
import project3 from "../assets/movie.png";


export const HERO_CONTENT = `I am a passionate MERN Stack developer with a knack for crafting robust and scalable web applications. 
With hands-on experience, I have honed my skills in front-end technologies like React.js, Tailwind  as well as back-end
 technologies like Node.js, MySQL,Express and MongoDB. My goal is to leverage my expertise to create innovative solutions that
  drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly
 web applications, I have worked with a variety of technologies, including React,Tailwind,
  Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has 
  evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and 
  enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, 
  and contributing to web development.`;

export const EXPERIENCES = [
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
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express"],
  },
  {
    title: "Chat App",
    image: project2,
    GitHub:`https://github.com/Adarsh7079/chatboat2`,
    description:
      "An application forChatting with friends with features such as creation rooms, multiple user can join in same room ",
    technologies: ["HTML", "CSS", "Tailwind", "Node.js","Socket.io"],
  },
  {
    title: "Movie recommends",
    image: project3,
    gitHub:`https://github.com/Adarsh7079/movieapp`,
    description:
      "A  showcasing details of movie enter by user , show all the  information about movie and give some suggestion to user .",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
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