import React from "react";
import Logo from "../../../assets/logo.svg";

export default function Nav() {
  const menuHandler = () => {
    const menu = document.getElementById("mobile-menu");

    const visibility = menu.getAttribute("data-visible");

    const btn = document.getElementById("menu-btn");
    btn.classList.toggle("open");

    if (visibility === "false") {
      menu.setAttribute("data-visible", "true");
    } else if (visibility === "true") {
      menu.setAttribute("data-visible", "false");
    }
  };

  return (
    <section>
      <nav className="flex justify-between items-center">
        <img
          src={Logo}
          alt="Space Tourism Logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />

        <button
          onClick={menuHandler}
          id="menu-btn"
          className=" z-20 hamburger w-6 h-5 cursor-pointer md:hidden"
        >
          <span className="hamburger-top h-0.5 bg-secondary w-6"></span>
          <span className="hamburger-middle h-0.5 bg-secondary w-6"></span>
          <span className="hamburger-bottom h-0.5 bg-secondary w-6"></span>
        </button>

        {/* mobile-menu */}
        <section
          id="mobile-menu"
          data-visible="false"
          className=" text-base text-white tracking-wide pl-8 uppercase space-y-8 z-10 h-screen bg-[rgb(255,255,255)]/10 backdrop-blur-md absolute w-4/6 top-0 bottom-0 right-0 md:hidden"
        >
          <p className="mt-28">
            {" "}
            <span className="font-bold mr-2.5 lg:inline">00</span> Home
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2.5 lg:inline">00</span> Destination
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2.5 lg:inline">00</span> Crew
          </p>
          <p>
            {" "}
            <span className="font-bold mr-2.5 lg:inline">00</span> Technology
          </p>
        </section>
        {/* mobile-menu */}

        {/* desktop menu */}
        <div className="hidden box-border bg-[rgb(255,255,255)]/10 relative top-0 -right-6 py-10 px-12 backdrop-blur uppercase text-sm md:block lg:static lg:-mr-14 lg:py-8 lg:px-28">
          <ul
            id="nav-items"
            className="flex box-border text-white tracking-wide"
          >
            <li className="mr-9 cursor-pointer">
              {" "}
              <span className="font-bold hidden mr-2.5 lg:inline">00</span> Home
            </li>
            <li className="mr-9 cursor-pointer">
              {" "}
              <span className="font-bold hidden mr-2.5 lg:inline">01</span>{" "}
              Destination
            </li>
            <li className="mr-9 cursor-pointer">
              {" "}
              <span className="font-bold hidden mr-2.5 lg:inline">03</span> Crew
            </li>
            <li id="last-link" className="cursor-pointer">
              {" "}
              <span className="font-bold hidden mr-2.5 lg:inline">04</span>{" "}
              Technology
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
