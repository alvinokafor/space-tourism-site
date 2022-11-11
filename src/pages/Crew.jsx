import React from 'react'
import ContentWrapper from "../components/ContentWrapper";
import Nav from "../components/ui_molecules/nav/Nav";

export default function Crew({currentPath}) {
  return (
    <main className="bg-crew-bg-mobile md:bg-crew-bg-tablet bg-no-repeat lg:bg-crew-bg h-screen bg-cover bg-center overflow-hidden">
    <ContentWrapper>
      <Nav currentPath={currentPath}/>


    </ContentWrapper>
  </main>
  )
}
