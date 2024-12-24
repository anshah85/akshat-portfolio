import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaChess} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/anshah85" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/akshatnshah" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@FoodieByHeart-rm8wg" },
  { icon: <FaChess />, path: "https://lichess.org/@/akshat724" },
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