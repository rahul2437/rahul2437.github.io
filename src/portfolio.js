import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  homepage: 'http://rahul2437.github.io/',
  title: 'Rahul.',
}

const about = {
  photo: aboutpic,
  name: 'RAHUL SHEELAVANTAR',
  role: 'Full stack developer',
  description:
    'A Fullstack Web Developer, who builds Web Applications that leads to the success of the overall product.',
  resume: 'https://drive.google.com/file/d/1fNmGh0b2FvFJcYKThS8__xF_r-DkJ8gO/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/rahulsheelavantar/',
    github: 'https://github.com/rahul2437',
  },
}

const projects = [
  {
    name: 'Kayak.com',
    description:
      `Clone of the famous website Kayak. At Kayak user can find and book cheap airline tickets, hotel rooms, holidays and car hire for Indian travellers with KAYAK.co.in
      Me (Kanav), Rahul, and Abhinav created this clone of kayak.co.in, a travel agency website.`,
    stack: ['localstorage', 'HTML', 'CSS', 'JavaScript', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/rahul2437/Kayaak-Clone',
    livePreview: 'https://kayak-clone.netlify.app/',
  },
  {
    name: 'Anthropologie.com',
    description: 'This is a clone of Fashion Website Anthropologie.com. This peoject was done my myself in a span of 4 days',
    stack: ['React', 'Localstorage', 'Reqres'],
    sourceCode: 'https://github.com/rahul2437/pricey-match-7148',
    livePreview: 'https://pricey-match-7148.netlify.app/'
  },
  {
    name: 'Indiatoday.in',
    description: 'This Project is a clone of India Today new website, Done with a group of five, Where I was the project lead and we successfully built the application in 5 days.',
    stack: ['HTML', 'CSS', 'Javascript', 'LocalStorage'],
    sourceCode: 'https://github.com/rahul2437/reflective-observation-2981',
    livePreview: 'https://reflective-observation-2981.netlify.app/'
  },
  {
    name: 'Bluefly.com',
    description: 'This is one of the first project where I was leading the team of 6, This is a clone of E-commerce website built in 5 days',
    stack: ['HTML', 'CSS', 'Javascript', 'LocalStorage'],
    sourceCode: 'https://github.com/rahul2437/Bluefly-Clone',
  },
  // {
  //   name: '',
  //   description: '',
  //   stack: [],
  //   sourceCode: '',
  //   livePreview: ''
  // },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MongoDB',
  'React',
  'Redux',
  'Firebase',
  'Material UI',
  'Git',
  'MERN',
  'Java 8',
  'Heroku',
  'Netlify'
]

const contact = {
  email: 'rahulsheelavantar@gmail.com',
}

export { header, about, projects, skills, contact }
