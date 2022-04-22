import { Transition } from "@headlessui/react";

const Button = ({ name, icon, isMouseOver }) => {
  return (
    <a
      href=""
      className="sidebar-button relative h-11 text-sm flex items-center justify-between border border-brand-green rounded-full overflow-hidden"
    >
      <Transition
        show={isMouseOver}
        enter="transition-all duration-200"
        enterFrom="opacity-0 w-0"
        enterTo="opacity-100 w-[140px]"
        leave="transition-all duration-200"
        leaveFrom="opacity-100 w-[140px]"
        leaveTo="opacity-0 w-0"
        className="pl-4 whitespace-nowrap transition-all duration-300"
      >
        {name}
      </Transition>
      <span className="w-11 h-11 flex items-center justify-center transition-all duration-500 p-1.5 xl:p-0">
        <img src={`/assets/${icon}.svg`} />
      </span>
    </a>
  );
};

export default Button;
