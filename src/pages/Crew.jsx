import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Nav from "../components/ui_molecules/nav/Nav";
import CrewImg from "../components/ui_atoms/CrewImg";
import CrewSwitcher from "../components/ui_atoms/CrewSwitcher";
import CrewRole from "../components/ui_atoms/CrewRole";
import CrewName from "../components/ui_atoms/CrewName";
import CrewBio from "../components/ui_atoms/CrewBio";
import { crew } from '../data.json'

export default function Crew({ currentPath }) {

  const [crewMates] = useState(crew)
  const [crewIndex, setCrewIndex] = useState(0)

  const {name, images, bio, role} = crewMates[crewIndex]

  return (
    <main className="bg-crew-bg-mobile md:bg-crew-bg-tablet bg-no-repeat lg:bg-crew-bg bg-cover bg-center overflow-hidden">
      <ContentWrapper>
        <Nav currentPath={currentPath} />

        <div className="text-center mt-8">
          <h2 className="text-white tracking-wider uppercase font-subHeading md:text-left mb:text-xl lg:text-lg lg:tracking-widest lg:ml-40">
            <span className="text-secondary mr-4">02</span>Meet your crew
          </h2>

          <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:items-center lg:text-left lg:px-40">
            <div><CrewImg image={images}/></div>
            <div className="md:flex md:flex-col">
            <CrewSwitcher crewMates={crewMates} setCrewIndex={setCrewIndex} crewIndex={crewIndex}/>
            <CrewRole role={role}/>
            <CrewName name={name}/>
            <CrewBio bio={bio} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
