import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-white text-secondary-900": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-md h-[73px] top-0 ": true, //positioning & styling
          "navbar":true,
      })}
    >
      <div className="navbar-icon-container">
        <Image
          src="/TimTechSolutions-side.png"
          alt="TimTech Solutions Logo"
          width={160}
          height={20}
          priority
        />
      </div>
      <div className="flex-grow"></div>
      <button 
        className="md:hidden p-2 hover:bg-primary-100 rounded-lg transition-colors text-primary-600"
        onClick={props.onMenuButtonClick}
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        type="button"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Navbar;
