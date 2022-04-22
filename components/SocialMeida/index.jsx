import {
  Telegram,
  Etherscan,
  Twitter,
  Dextools,
} from "./../Icons/SocialMedias";

const socials = [
  {
    name: "Telegram",
    icon: Telegram,
  },
  {
    name: "Etherscan",
    icon: Etherscan,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
  {
    name: "Dextools",
    icon: Dextools,
  },
];

const SocialMedia = ({ classes = "" }) => {
  return (
    <div
      className={`${classes} flex items-center transition-all duration-500 mt-auto`}
    >
      {socials.map(link => (
        <a
          key={link.name}
          href="#"
          className="block transition duration-200 hover:scale-125 p-3"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
