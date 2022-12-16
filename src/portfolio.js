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
    name: 'kayak-Clone',
    description:
      `At Kayak user can find and book cheap airline tickets, hotel rooms, holidays and car hire for Indian travellers with KAYAK.co.in
      Me (Kanav), Rahul, and Abhinav created this clone of kayak.co.in, a travel agency website.`,
    stack: ['localstorage', 'HTML', 'CSS', 'JavaScript', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/rahul2437/Kayaak-Clone',
    livePreview: 'https://kayak-clone.netlify.app/',
  }
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
