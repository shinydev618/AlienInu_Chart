import Button from "./Button";

const navigation = [
  { name: "Alien Base", icon: "alien-base" },
  { name: "Alien Arcade", icon: "alien-arcade" },
  { name: "Alien Swap", icon: "alien-swap" },
  { name: "Alien Aliances", icon: "alien-aliances" },
  { name: "Galactic Market", icon: "alient-galactic-market" },
  { name: "Alien Launchpad", icon: "alient-launchpad" },
];

const SidebarNav = ({ isMouseOver }) => {
  return (
    <nav className="w-full space-y-5">
      {navigation.map(link => (
        <Button {...link} key={link.icon} isMouseOver={isMouseOver} />
      ))}
    </nav>
  );
};

export default SidebarNav;
