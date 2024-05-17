import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import {
  MdOutlineArticle,
  MdArticle,
  MdOutlineContactPage,
  MdContactPage,
  MdAccountCircle,
  MdOutlineAccountCircle,
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
    github_icon: "src/assets/images/github.png",
    medium_icon: "src/assets/images/medium.png",
    hashnode_icon:"src/assets/images/hashnode.png",
    github_token: "",
    hashnode_token: "",
    github_url: "https://github.com/Ayoush",
    verified_icon: "src/assets/images/verify.png",
    profile_url: 'https://medium.com/@ayoushchourasia',
    hashnode_url: 'https://hashnode.com/@Ayoush',
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
        name: "Instagram",
        href: "https://www.instagram.com/ayoushchourasia/",
        icon: FaInstagram,
        username: "@ayoushchourasia"
      },
      {
        name: "Github",
        href: "https://github.com/Ayoush",
        icon: VscGithub,
        username: "Ayoush"
      },
      {
        name: "Medium",
        href: "https://medium.com/@ayoushchourasia",
        icon: BsMedium,
        username: "@ayoushchourasia"
      },
      {
        name: "Hashnode",
        href: "https://hashnode.com/@Ayoush",
        icon: SiHashnode,
        username: "@Ayoush"
      }
    ]
  };
  

  export default config;