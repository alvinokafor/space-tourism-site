import ContentWrapper from "../components/ContentWrapper";
import Nav from "../components/ui_molecules/nav/Nav";

export default function Technology({ currentPath }) {
  return (
    <main className="bg-technology-bg-mobile md:bg-technology-bg-tablet bg-no-repeat lg:bg-technology-bg h-screen bg-cover bg-center overflow-hidden">
      <ContentWrapper>
        <Nav currentPath={currentPath}/>
      </ContentWrapper>
    </main>
  )
}
