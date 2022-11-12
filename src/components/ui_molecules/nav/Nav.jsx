import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export default function Nav({ currentPath }) {
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
      <nav className="flex justify-between items-center font-subHeading">
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
          className=" text-base text-white tracking-wide pl-8 uppercase space-y-8 z-10 h-screen bg-[rgb(255,255,255)]/10 backdrop-blur-md fixed w-4/6 top-0 bottom-0 right-0 md:hidden"
        >
          <Link to="/">
            <p className={ currentPath === "" ? "mt-28 mb-8 border-r-4" : "mt-28 mb-8"}>
              {" "}
              <span className="font-bold mr-2.5 lg:inline">00</span> Home
            </p>
          </Link>

          <Link to="/destination">
            <p className={ currentPath === "destination" ? "mb-8 border-r-4" : "mb-8"}>
              {" "}
              <span className="font-bold mr-2.5 lg:inline">01</span> Destination
            </p>
          </Link>

          <Link to="/crew">
            <p className={ currentPath === "crew" ? "mb-8 border-r-4" : "mb-8"}>
              {" "}
              <span className="font-bold mr-2.5 lg:inline">02</span> Crew
            </p>
          </Link>

          <Link to="/technology">
            <p className={ currentPath === "technology" ? "border-r-4" : ""}>
              {" "}
              <span className="font-bold mr-2.5 lg:inline">03</span> Technology
            </p>
          </Link>
        </section>
        {/* mobile-menu */}

        {/* desktop menu */}
        <div className="hidden box-border bg-[rgb(255,255,255)]/10 relative top-0 -right-6 py-10 px-12 backdrop-blur uppercase text-sm md:block lg:static lg:-mr-14 lg:py-8 lg:px-28">
          <ul
            id="nav-items"
            className="flex box-border text-white tracking-wide space-x-9"
          >
            <Link to="/" className="relative">
              <li
                className={
                  currentPath === ""
                    ? "cursor-pointer before:absolute before:h-[2px] before:bg-white before:w-full  before:-bottom-8 before:content-['']"
                    : " before:absolute before:h-[2px] before:bg-white before:w-full  before:-bottom-8 before:content-[''] before:scale-x-0 hover:before:scale-x-100 hover:before:transition-all hover:before:duration-300 cursor-pointer"
                }
              >
                {" "}
                <span className="font-bold hidden mr-2.5 lg:inline">00</span>
                Home
              </li>
            </Link>

            <Link to="/destination" className="relative">
              <li
                className={
                  currentPath === "destination"
                    ? "cursor-pointer before:absolute before:h-[2px] before:bg-white before:w-full before:-bottom-8 before:content-['']"
                    : "before:absolute before:h-[2px] before:bg-white before:w-full  before:-bottom-8 before:content-[''] before:scale-x-0 hover:before:scale-x-100 hover:before:transition-all hover:before:duration-300 cursor-pointer"
                }
              >
                {" "}
                <span className="font-bold hidden mr-2.5 lg:inline">
                  01
                </span>{" "}
                Destination
              </li>
            </Link>

            <Link to="/crew" className="relative">
              <li
                className={
                  currentPath === "crew"
                    ? "cursor-pointer before:absolute before:h-[2px] before:bg-white before:w-full before:-bottom-8 before:content-['']"
                    : "before:absolute before:h-[2px] before:bg-white before:w-full  before:-bottom-8 before:content-[''] before:scale-x-0 hover:before:scale-x-100 hover:before:transition-all hover:before:duration-300 cursor-pointer"
                }
              >
                {" "}
                <span className="font-bold hidden mr-2.5 lg:inline">
                  03
                </span>{" "}
                Crew
              </li>
            </Link>

            <Link to="/technology" className="relative">
              <li
                id="last-link"
                className={
                  currentPath === "technology"
                    ? "cursor-pointer before:absolute before:h-[2px] before:bg-white before:w-full before:-bottom-8 before:content-['']"
                    : "before:absolute before:h-[2px] before:bg-white before:w-full  before:-bottom-8 before:content-[''] before:scale-x-0 hover:before:scale-x-100 hover:before:transition-all hover:before:duration-300 cursor-pointer"
                }
              >
                {" "}
                <span className="font-bold hidden mr-2.5 lg:inline">
                  04
                </span>{" "}
                Technology
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  );
}
