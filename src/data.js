import { FaJava, FaReact, FaGitAlt, FaGithub, FaGithubSquare, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiJavascriptLine, RiTailwindCssLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiPostman, SiLeetcode, SiCodechef } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { TbBrandTwitter } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";


import c from "./assests/c.png";
import cplus from "./assests/c++.png";

import Tic_Tac_Toe from "./assests/tic_tac_toe.jpeg";
import Chess from "./assests/chess-3960184_640.jpg";
import Razorpay_clone from "./assests/razorpay_clone.png";
import Portfolio from "./assests/Portfolio.png";
import Ecomzy from "./assests/Ecomzy_1.png"

const user_data = {
  bio: `Hey there,👋 I'm Dil Raj, a 20-year-old CSE undergrad passionate
    about Software Development, Machine Learning, and Data Structures
    & Algorithms (DSA). Currently, I'm pursuing my career as a Full
    Stack Web Developer 👨🏻‍💻, with a strong interest in AI and problem-solving.
    I share my learnings through speaking engagements and write-ups. ✍🏻`,

  resume:["https://drive.google.com/file/d/1tpsg3eesRE_-7bNFhvim_g75hMZg6o-Q/view?usp=sharing"],

  languages1: ["C", "C++"],
  img4: [c, cplus],
  rate4: [5, 5],

  languages: ["Java", "JavaScript", "Python"],
  img1: [<FaJava />, <RiJavascriptLine />, <AiOutlinePython />],
  rate1: [4, 4, 4],

  frameworks: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
  img2: [
    <FaReact />,
    <RiTailwindCssLine />,
    <IoLogoNodejs />,
    <BiLogoMongodb />,
    <SiExpress />
  ],
  rate2: [5, 5, 5, 5, 5],

  tools: ["Git", "GitHub", "VS Code", "Postman", "MySQL"],
  img3: [
    <FaGitAlt />,
    <FaGithubSquare />,
    <VscVscode />,
    <SiPostman />,
    <GrMysql />
  ],
  rate3: [4, 4, 4, 5, 5],

  education: ["B.Tech in Computer Science and Engineering", "Senior Secondary School", "Secondary School"],
  place: ["Indian Institute of Information Technology, Nagpur", "P.B High School", "B.V.P School"],
  location: ["Maharashtra", "Lakhisarai, Bihar", "Lakhisarai, Bihar"],
  year: ["2022-2026", "2020-2022", "2016-2020"],
  work: ["NA", "NA", "NA"],
  w_place: ["NA", "NA", "NA"],
  w_location: ["NA", "NA", "NA"],
  w_year: ["NA", "NA", "NA"],

  projects: [
    {
      img: Tic_Tac_Toe,
      title: "Tic Tac Toe",
      description: "A classic two-player game built with interactive UI, allowing users to play and reset the game seamlessly.",
    },
    {
      img: Chess,
      title: "Chess",
      description: "A fully functional chess game with drag-and-drop functionality, supporting two-player mode and game reset.",
    },
    {
      img: Razorpay_clone,
      title: "Razorpay Clone",
      description: "A simplified clone of the Razorpay payment gateway, showcasing user-friendly interfaces and mock payment processing.",
    },
    {
      img: Portfolio,
      title: "Portfolio",
      description: "A personal portfolio website to showcase skills, projects, and achievements, built with responsive design and smooth navigation.",
    },
    {
      img: Ecomzy,
      title: "Ecomzy",
      description: "A shopping cart website with features like product selection, cart management, and integrated billing functionality.",
    },
  ],

  contacts:[
    {
      icon:<MdOutlineMailOutline />,
      title:"Email",
      description:"wolfstrix360@outlook.com",
    },
    {
      icon:<FaInstagram />,
      title:"Instagram",
      description:"@dilraj_1602",
    },
    {
      icon:<TbBrandTwitter />,
      title:"Twitter",
      description:"@Dilraj1602",      
    },
  ],

  social_media:[
    {
      url:"https://www.linkedin.com/in/dil-raj-503b44266/",
      icon:<FaLinkedinIn />,
    },
    {
      url:"https://github.com/Dilraj1602",
      icon:<FaGithub />,
    },
    {
      url:"https://www.codechef.com/users/wolfstrix360",
      icon:<SiCodechef />,
    },
    {
      url:"https://leetcode.com/u/WOLFStrix360/",
      icon:<SiLeetcode />,
    }
  ],

};

export default user_data;
