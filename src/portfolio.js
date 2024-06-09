import anthropologie from "./components/Access/Anthropologie.png";
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
  description: `I am a certified software engineer with expertise in C#, .NET, React, TypeScript, eCharts, data visualization, ETL tools, and DevOps. My journey into programming began with learning basic programming in school, which sparked my interest in software development. Despite initially pursuing a degree in Mechanical Engineering, my passion for IT led me to enroll in a Full Stack Development course at Masai School.
  Currently, I am working as a Full Stack Web Developer at Noesys Software, where I am building FuseData, a data automation and data engineering product. I have strong problem-solving skills and a keen interest in Design Thinking. My technical proficiency includes ReactJS, .NET, Java, CSS, JavaScript, C++, MongoDB, NodeJS, REST APIs, and Git/Github.
  Apart from web development, I enjoy traveling, driving, sketching, and following Formula 1.
  You can check out my work on GitHub at https://github.com/rahul2437/. Feel free to reach out to me at rahulsheelavantar@gmail.com. For more information, visit my website at https://www.rahulsheelavantar.in.`,
};

const projects = [
  {
    name: "FuseData",
    description:
      "FuseData is a Data automation and Data engineering tool, It has integrations with Salesforce, Braintree, GraphQl, Dynamics365, OData",
    stack: ["React", "Typescript", ".Net 8", "gRPC", "SQLite"],
    sourceCode: "",
    livePreview: "https://fusedata.cloud/",
    image: "https://fusedata.cloud/assets/custom/FuseData.gif",
  },
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
  // {
  //   name: "",
  //   description: "",
  //   stack: [],
  //   sourceCode: "",
  //   livePreview: "",
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

export { header, about, projects, skills, contact, myStory };
