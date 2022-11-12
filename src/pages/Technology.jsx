import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Nav from "../components/ui_molecules/nav/Nav";
import TechnologyImg from "../components/ui_atoms/TechnologyImg";
import TechSwticher from "../components/ui_atoms/TechSwticher";
import TechSubheading from "../components/ui_atoms/TechSubheading";
import TechHeading from "../components/ui_atoms/TechHeading";
import TechBody from "../components/ui_atoms/TechBody";
import { technology } from "../data.json"

export default function Technology({ currentPath }) {
  const [tech] = useState(technology)
  const [techIndex, setTechIndex] = useState(0)

  const {name, images, description} = tech[techIndex]

  return (
    <main className="bg-crew-bg-mobile md:bg-crew-bg-tablet bg-no-repeat lg:bg-crew-bg bg-cover bg-center  overflow-hidden">
      <ContentWrapper>
        <Nav currentPath={currentPath} />

        <div className="text-center mt-8">
          <h2 className="text-white tracking-wider uppercase font-subHeading md:text-left mb:text-xl lg:text-lg lg:tracking-widest">
            <span className="text-secondary mr-4">03</span>Space launch 101
          </h2>
        </div>

        <div className="text-center lg:flex flex-row-reverse lg:items-center lg:text-left lg:mb-10">
          <div>
            <TechnologyImg image={images}/>
          </div>

          <section className="lg:flex">
            <div>
              <TechSwticher tech={tech} techIndex={techIndex} setTechIndex={setTechIndex}/>
            </div>
            <div className="lg:ml-20">
              <TechSubheading />
              <TechHeading name={name}/>
              <TechBody description={description}/>
            </div>
          </section>
        </div>
      </ContentWrapper>
    </main>
  );
}
