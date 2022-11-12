import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/ui_molecules/nav/Nav";
import ContentWrapper from "../components/ContentWrapper";
import ExploreBtn from "../components/ui_atoms/ExploreBtn";

export default function Home({ currentPath }) {
  return (
    <main className="bg-home-bg-mobile md:bg-home-bg-tablet bg-no-repeat lg:bg-home-bg h-screen bg-cover bg-center overflow-hidden">
      
      <ContentWrapper>
      <Nav currentPath={currentPath}/>
        {/* Hero Content */}
        <section className="text-center mt-12 mb-4 lg:flex lg:text-left lg:items-center lg:justify-end lg:mx-40 lg:mt-28">
            <div>
          <h3 className="text-secondary tracking-wider mb-4 font-subHeading">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-white font-title text-3xl mb-4 lg:text-4xl">SPACE</h1>
          <p className="text-secondary text-xs md:text-base lg:w-2/4 md:w-2/3 md:mx-auto lg:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          </div>
          <Link to='/destination'>
          <ExploreBtn />
          </Link>
          
        </section> 
        {/* Hero Content */}

        
      </ContentWrapper>
    </main>
  );
}
