import classNames from "classnames";
import React, { PropsWithChildren, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width on mount and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to collapse the sidebar
  const handleItemClick = () => {
    setSidebarCollapsed(true);
    setShowSidebar(false);
  };

  return (
    <div
      className={classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed && !showSidebar && !isMobile,
        "grid-cols-sidebar-collapsed": collapsed && !showSidebar && !isMobile,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
        "grid-cols-1": showSidebar || isMobile, // Single column layout for small screens
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
        onItemClick={handleItemClick} // Pass the collapse function to Sidebar
      />
      <div className="flex flex-col h-screen">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        <div className="flex-grow overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
