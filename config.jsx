import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
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
  };
  

  export default config;