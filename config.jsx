import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { BsFilePersonFill, BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";
import { SiGmail, SiHashnode } from "react-icons/si";
import {
  MdOutlineArticle,
  MdArticle,
  MdOutlineContactPage,
  MdContactPage,
  MdAccountCircle,
  MdOutlineAccountCircle,
  MdAccessTime,
  MdMail,
} from "react-icons/md";
import Blog from "./src/components/Tabs/blogs";
import Profile from "./src/components/Tabs/profile";
import Contact from "./src/components/Tabs/contacts";
import Home from "./src/components/Tabs/home";
import Github from "./src/components/Tabs/github";
const config = {
    name: "Ayoush Chourasia",
    logo: "src/assets/images/logo.png",
    avatar: "src/assets/images/avatar.JPEG",
    github: "https://api.github.com/users/Ayoush",
    company: "Veltris",
    bio: "Hope you relish reading my blogs as much as I relish writing them.",
    hometown: "Indore",
    instagram: "ayoushchourasia",
    location: "India",
    email: "hireayoush@gmail.com",
    github_icon: "src/assets/images/github.png",
    medium_icon: "src/assets/images/medium.png",
    hashnode_icon:"src/assets/images/hashnode.png",
    github_token: import.meta.env.VITE_REACT_APP_GITHUB_TOKEN,
    hashnode_token: import.meta.env.VITE_REACT_APP_HASHNODE_TOKEN,
    github_url: "https://github.com/Ayoush",
    verified_icon: "src/assets/images/verify.png",
    profile_url: 'https://medium.com/@ayoushchourasia',
    hashnode_url: 'https://hashnode.com/@Ayoush',
    blog_url: "https://thinkersclub.xyz/",
    navLinks: [
      {
        name: "Home",
        icon: AiOutlineHome,
        activeIcon: AiFillHome,
        href: "/",
        component: Home
      },
      {
        name: "Github",
        icon: VscGithub,
        activeIcon: VscGithubInverted,
        href: "/github",
        component: Github
      },
      {
        name: "Blogs",
        icon: MdOutlineArticle,
        activeIcon: MdArticle,
        href: "/blogs",
        component: Blog
      },
      {
        name: "Contact",
        icon: MdOutlineContactPage,
        activeIcon: MdContactPage,
        href: "/contact",
        component: Contact
      },
      {
        name: "Profile",
        icon: MdOutlineAccountCircle,
        activeIcon: MdAccountCircle,
        href: "/profile",
        component: Profile
      },
    ],
    social_links: [
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/ayoushchourasia",
        icon: SiGmail,
        username: "ayoushchourasia",
        logo: "src/assets/images/linkedin.png"
      },
      {
        name: "E-Mail",
        href: "hireayoush@gmail.com",
        icon: SiGmail,
        username: "hireayoush",
        logo: "src/assets/images/gmail.png"
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ayoushchourasia/",
        icon: FaInstagram,
        username: "@ayoushchourasia",
        logo: "src/assets/images/instagram.png"
      },
      {
        name: "Github",
        href: "https://github.com/Ayoush",
        icon: VscGithub,
        username: "Ayoush",
        logo: "src/assets/images/github.png"
      },
      {
        name: "Medium",
        href: "https://medium.com/@ayoushchourasia",
        icon: BsMedium,
        username: "@ayoushchourasia",
        logo: "src/assets/images/medium.png"
      },
      {
        name: "Hashnode",
        href: "https://thinkersclub.xyz/",
        icon: SiHashnode,
        username: "@Ayoush",
        logo: "src/assets/images/hashnode.png"
      }
    ],
    contact_info: [
      {
        image: "src/assets/images/avatar.JPEG",
        icon: "src/assets/images/avatar.JPEG",
        blogName: "Ayoush Chourasia",
        link: "https://x.com/Meph0x",
        published: "21st May 2024",
        title: `Let me know how can I help you.
        Feel free to contact me over email`,
        numbers: [{
          data: "hireayoush@gmail.com"
        }],
        InfoIcon: MdAccessTime,
        BottomIcons: MdMail
      },
      {
        image: "src/assets/images/avatar.JPEG",
        icon: "src/assets/images/avatar.JPEG",
        blogName: "Ayoush Chourasia",
        link: "https://x.com/Meph0x",
        published: "21st May 2024",
        title: `Why you should follow me?
        - Offering valuable insights as a Senior Software Development Engineer.
        - Constantly exploring new tech frameworks and tools.
        - Advocating for and contributing to the open-source community.
        - Versatile in quickly adapting and switching between technologies.
        - Providing engaging technical content on various platforms.
        - Actively engaging in industry webinars, tech festivals, and meetups.`,
        numbers: [{
          data: "hireayoush@gmail.com"
        }],
        InfoIcon: MdAccessTime,
        BottomIcons: MdMail
      }, 
      {
        image: "src/assets/images/avatar.JPEG",
        icon: "src/assets/images/avatar.JPEG",
        blogName: "Ayoush Chourasia",
        link: "https://x.com/Meph0x",
        published: "21st May 2024",
        title: `Hey, I'm Ayoush Chourasia 😄
        Below are some points where I can help you 👇🏻
        - Providing mentorship and guidance in your career journey.
        - Assisting with community building initiatives.
        - Offering support in technical writing tasks.
        - Solving problems and providing solutions in web development.
        - Sharing my enthusiasm and experience in web development with anyone interested.`,
        numbers: [{
          data: "hireayoush@gmail.com"
        }],
        InfoIcon: MdAccessTime,
        BottomIcons: MdMail
      }

    ],
    companies: [{
      image: "src/assets/images/veltris.jpeg",
      name: "Veltris",
      url: "https://www.veltris.com/",
      acronym: "SSDE",
      published: "October 2021 - Present",
      text: `Tasks and responsibilities 🧑🏻‍💻
      - Engineered Backend for travel app UpAway (Python, Django, MySQL, Google Pub/Sub).
      - Performed query optimization and cloud migration for Cypress Lawn (MySQL, Azure Studio, NodeJS).
      - Developed Backend for Board of Elections New York (Google Wallet Pass API, Apple Pass API, DynamoDB, Serverless).`,
      experience: "2.5 years",
      location: "Hyderabad, India",
      designation: "Senior Software Engineer"
    },
    {
      image: "src/assets/images/stackavenue.jpeg",
      name: "StackAvenue",
      url: "https://www.veltris.com/",
      acronym: "SDE",
      published: "December 2019 - October 2021",
      text: `Tasks and responsibilities 🧑🏻‍💻
      - Engineered Backend for time and project management software (Elixir, Phoenix, Redis, Postgres).
      - Collaborated on Datakrew's MADS No-Code IoT platform (Elixir, Phoenix, ElasticSearch, Postgres, Redis).`,
      experience: "2 years",
      location: "Pune, India",
      designation: "Software Developer",
    },
    {
      image: "src/assets/images/tcs.png",
      name: "TCS",
      published: "December 2016 - December 2019",
      url: "https://www.tcs.com/",
      acronym: "SE",
      text: `Tasks and responsibilities 🧑🏻‍💻
      - Applied HIL and MIL testing for ADAS features in Nissan Leaf (CAN, Matlab, Python).
      - Automated dSpace simulation and report generation (CAN, Python).`,
      experience: "3 years",
      location: "Nagpur, India",
      designation: "System Engineer"
    }],
    profilelinks: [
      {
        name: "Resume",
        link: "https://drive.google.com/file/d/1zalINL8wvf6b4uaS2igmYw7SQA-BDv1j/view",
        icon: BsFilePersonFill,
      },
      {
        name: "Github",
        link: "https://github.com/Ayoush",
        icon: VscGithub,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ayoushchourasia",
        icon: BsLinkedin,
      },
      {
        name: "Twitter",
        link: "https://x.com/Meph0x",
        icon: BsTwitter,
      },
    ],
    skills: [
      {
        image: "src/assets/images/avatar.JPEG",
        name: "Ayoush Chourasia",
        published: "21st May 1994",
        url: "https://github.com/Ayoush",
        acronym: "",
        text: `Programming Skills 🪝
        ▷ TypeScript
        ▷ JavaScript
        ▷ HTML
        ▷ CSS
        ▷ Python
        ▷ Elixir`,
        experience: "6 years",
        location: "Expert",
        designation: "Elixir"
      },
      {
        image: "src/assets/images/avatar.JPEG",
        name: "Ayoush Chourasia",
        published: "21st May 1994",
        url: "https://github.com/Ayoush",
        acronym: "",
        text: `Frameworks 🪝
        ▷ Phoenix
        ▷ Tailwind
        ▷ React
        ▷ NodeJS
        ▷ Django`,
        experience: "6 years",
        location: "Expert",
        designation: "Phoenix"
      },
      {
        image: "src/assets/images/avatar.JPEG",
        name: "Ayoush Chourasia",
        published: "21st May 1994",
        url: "https://github.com/Ayoush",
        acronym: "",
        text: `Database 🪝
        ▷ MySQL
        ▷ PostgreSQL
        ▷ Redis
        ▷ Elasticsearch
        ▷ MongoDB
        ▷ DynamoDB`,
        experience: "6 years",
        location: "Expert",
        designation: "PostgreSQL"
      },
      {
        image: "src/assets/images/avatar.JPEG",
        name: "Ayoush Chourasia",
        published: "21st May 1994",
        url: "https://github.com/Ayoush",
        acronym: "",
        text: `Other Skills 🪝
        ▷ GraphQL
        ▷ Docker
        ▷ Kubernetes
        ▷ RabbitMQ
        ▷ AWS
        ▷ GithubActions`,
        experience: "6 years",
        location: "Expert",
        designation: "AWS"
      }
    ]
  
  };
  

  export default config;