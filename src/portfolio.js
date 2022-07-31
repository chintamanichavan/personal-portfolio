import aboutpic from "./components/Access/profile.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Profile.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'CHINTAMANI CHAVAN',
  role: 'DevOps Engineer',
  description:
    '',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/chintamanichavan/',
    github: 'https://github.com/chintamanichavan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sign Language Detection',
    description:
      'Sign Language Detection using Action recongnition is Performed real-time sign language detection using OpenCV li ',
    stack: ['OpenCV', 'deep learning', ],
    sourceCode: 'https://github.com/chintamanichavan/Sign-Language-Detect-on-using-ACTION-RECOGNITION/blob/master/Action%20Detection%20Refined.ipynb',
   
  },
  {
    name: 'AI Smile Detector',
    
    description:
      ' Used Haar Algorithm to detect the Face and Smile within the face from the live Webcam feed . Used OpenCV library to implement the real-time computer vision.',
    stack: ['Artificial intelligence','OpenCV'],
    sourceCode: 'https://github.com/chintamanichavan/Real-Time-Face-and-Smile-Detection',
   
  },
  {
    name: 'Expense tracker',
    description:
      'Developed a Expense tracker application with the use of Python framework Django.Used Cloud Build to setup auto deployment pipeline for GKE application workload',
    stack: ['Django','Python'],
    sourceCode: 'https://github.com/chintamanichavan/Expense-and-Portfolio-Tracker',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Azure',
  'Networking',
  'Linux',
'Kubernetes',
  'JavaScript',
  'PowerShell',
  'Ansible',
  'MongoDB',
  'Terraform',
  'Bash',
  'Docker',
  
  'MySQL',
  'Git',
 
  'NSIS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: ' chintamani.chavan08@gmail.com',
}

export { header, about, projects, skills, contact }
