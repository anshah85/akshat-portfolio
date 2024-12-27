import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaChess, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const socials = [
  { icon: <FaPhoneAlt />, path: "tel: +1-(607)370-8772" },
  { icon: <FaEnvelope />, path: "mailto:ashah85@binghamton.edu" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/akshatnshah" },
  { icon: <FaGithub />, path: "https://www.github.com/anshah85" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/akshat.shah24" },
  // { icon: <FaChess />, path: "https://lichess.org/@/akshat724" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
    })
    }
  </div>;
}

export default Social;