import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Nav from "../components/ui_molecules/nav/Nav";
import DestinationImg from "../components/ui_atoms/DestinationImg";
import DestinationTabs from "../components/ui_molecules/DestinationTabs";
import BodyText from "../components/ui_atoms/BodyText";
import PlanetName from "../components/ui_atoms/PlanetName";
import DestinationInfo from "../components/ui_molecules/DestinationInfo";
import { destinations } from "../data.json";

export default function Destination({ currentPath }) {

  const [destination] = useState(destinations)
  const [destinationIndex, setDestinationIndex] = useState(0)

  const {name, images, description, distance, travel} = destination[destinationIndex]


  return (
    <main className=" bg-destination-bg-mobile md:bg-destination-bg-tablet bg-no-repeat h-full lg:bg-destination-bg bg-cover bg-center overflow-hidden">
      <ContentWrapper>
        <Nav currentPath={currentPath} />
        <div className="text-center mt-8">
          <h2 className="text-white tracking-wider uppercase font-subHeading md:text-left lg:ml-32 lg:text-lg lg:tracking-widest">
            <span className="text-secondary mr-4">01</span>Pick your Destination
          </h2>

          <div className="lg:flex lg:items-center">
            <DestinationImg image={images}/>
            <div className="lg:w-2/4 lg:flex lg:flex-col lg:justify-end">
              <DestinationTabs setDestinationIndex={setDestinationIndex} destination={destination} destinationIndex={destinationIndex}/>
              <PlanetName name={name}/>
              <BodyText description={description}/>
              <DestinationInfo distance={distance} travel={travel}/>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}
