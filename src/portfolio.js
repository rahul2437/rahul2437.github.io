import anthropologie from "./components/Access/Anthropologie.png";
import blueFly from "./components/Access/blueFly.png";
import indiatoday from "./components/Access/Indiatoday.png";
import kayak from "./components/Access/Kayak.png";
import lyst from "./components/Access/lyst.jpeg";
import aboutpic from "./components/Access/small.png";

const header = {
  homepage: "http://rahul2437.github.io",
  title: "Rahul.",
};

const about = {
  photo: aboutpic,
  name: "RAHUL SHEELAVANTAR",
  role: "Full stack developer",
  description:
    "A Fullstack Web Developer, who builds Web Applications that leads to the success of the overall product.",
  resume:
    "https://drive.google.com/file/d/1fNmGh0b2FvFJcYKThS8__xF_r-DkJ8gO/view?usp=share_link",
  social: {
    linkedin: "https://www.linkedin.com/in/rahulsheelavantar/",
    github: "https://github.com/rahul2437",
  },
};

const myStory = {
  description: `I remember the first time I used basic programming in school and wrote simple programs. It was exciting to see your sentences come alive on the website. I then began learning C++ and JAVA. The process of solving problems in C++ and Java ignited a spark in my head and made me contemplate it as a career. My curiosity grew and I wanted to know how software and applications worked. And so I decided to pursue B.Tech. Unfortunately, I could not get into Computer Science and ended up joining Mechanical Engineering.
  After my graduation, while working in the automobile industry I realized I want to get into Information Technology. I then enrolled at Masai School for a course on Full Stack Development and currently aspiring to be a Full Stack Web Developer.

  I am a quick learner and have good problem-solving skills. I am also interested in Design Thinking. I am adept in Java, HTML, CSS, Javascript, C++, ReactJS, MongoDB, NodeJS, REST APIs, and Git/Github.

  Apart from web development, I am interested in traveling, driving, sketching, and Formula 1.

  You can check out my work here https://github.com/rahul2437/
  You may reach out to me at rahulsheelavantar@gmail.com`,
};

const projects = [
  {
    name: "Kayak.com",
    description: `Clone of the famous website Kayak. At Kayak user can find and book cheap airline tickets, hotel rooms, holidays and car hire for Indian travellers with KAYAK.co.in
      Me (Rahul), Kanav, and Abhinav created this clone of kayak.co.in, a travel agency website.`,
    stack: ["localstorage", "HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    sourceCode: "https://github.com/rahul2437/Kayaak-Clone",
    livePreview: "https://kayaak-clone.vercel.app/",
    image: kayak,
  },
  {
    name: "Lyst.com",
    description:
      "Designed the clone with all features within the stipulated time. Used and applied react redux javascript styled-components reactjs redux-thunk axios netlify react-redux chakra-ui as well as material-ui and Animation skills to create and test the clone. Worked with a 3-member research team for accomplishing the same.",
    stack: [
      "React",
      "Redux",
      "Javascript",
      "Styled Components",
      "React JS",
      "MUI",
      "Thunk",
      "Axios",
      "Netlify",
      "React-Reduc",
      "ChakraUi",
    ],
    sourceCode: "https://github.com/rahul2437/Lyst.com",
    livePreview: "https://seemly-porter-7181.netlify.app/",
    image: lyst,
  },
  {
    name: "Anthropologie.com",
    description:
      "This is a clone of Fashion Website Anthropologie.com. This project was done my myself in a span of 4 days",
    stack: ["React", "Localstorage", "Reqres"],
    sourceCode: "https://github.com/rahul2437/pricey-match-7148",
    livePreview: "https://pricey-match-7148.netlify.app/",
    image: anthropologie,
  },
  {
    name: "Indiatoday.in",
    description:
      "This Project is a clone of India Today new website, Done with a group of five, Where I was the project lead and we successfully built the application in 5 days.",
    stack: ["HTML", "CSS", "Javascript", "LocalStorage"],
    sourceCode: "https://github.com/rahul2437/India-Today-Clone",
    livePreview: "https://reflective-observation-2981.netlify.app/",
    image: indiatoday,
  },
  {
    name: "Bluefly.com",
    description:
      "This is one of the first project where I was leading the team of 6, This is a clone of E-commerce website built in 5 days",
    stack: ["HTML", "CSS", "Javascript", "LocalStorage"],
    sourceCode: "https://github.com/rahul2437/Bluefly-Clone",
    livePreview: "https://bluefly-clone-pied.vercel.app/source/index.html",
    image: blueFly,
  },
  // {
  //   name: '',
  //   description: '',
  //   stack: [],
  //   sourceCode: '',
  //   livePreview: ''
  // },
];

const skills = [
  {
    name: "HTML",
    imageUrl: "https://www.svgrepo.com/show/353884/html-5.svg",
  },
  {
    name: "CSS",
    imageUrl: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    name: "JavaScript",
    imageUrl: "https://www.svgrepo.com/show/373705/js-official.svg",
  },
  {
    name: "TypeScript",
    imageUrl: "https://www.svgrepo.com/show/443502/brand-typescript.svg",
  },
  {
    name: "MongoDB",
    imageUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "Express",
    imageUrl: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    name: "React",
    imageUrl: "https://www.svgrepo.com/show/452092/react.svg",
  },
  { name: "Redux", imageUrl: "https://www.svgrepo.com/show/452093/redux.svg" },
  {
    name: "Node Js",
    imageUrl: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
  },
  {
    name: "Firebase",
    imageUrl: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  {
    name: "Git",
    imageUrl: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "Java 8",
    imageUrl: "https://www.svgrepo.com/show/452234/java.svg",
  },
  {
    name: "Vercel",
    imageUrl: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
  {
    name: "Netlify",
    imageUrl: "https://www.svgrepo.com/show/376339/netlify.svg",
  },
];

const contact = {
  email: "rahulsheelavantar@gmail.com",
};

export { header, about, projects, skills, contact };
