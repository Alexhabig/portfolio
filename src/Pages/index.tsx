import React from "react";
import Fixlayout from "../layout/fixlayout";
import Navigationbar from "../components/pageComp/navigationbar";
import HeroSection from "../components/pageComp/heroSection";
import AboutMe from "../components/pageComp/aboutMe";
import Footer2 from "../components/pageComp/footer";
import Skillset from "../components/pageComp/skillset";
import Myproject from "../components/pageComp/myproject";
import Contact from "../components/pageComp/contact";

const Home = () => {
  return (
    <main>
      <Fixlayout>
        <header className="relative">
          <Navigationbar />
        </header>
        {/* hero */}
        <section className="">
          <HeroSection />
        </section>

        {/* about */}
        <section>
          <AboutMe />
        </section>

        {/* skills */}
        <section>
          <Skillset />
        </section>

        {/* project*/}
        <section>
          <Myproject />
        </section>

        {/* Contacts*/}
        <section>
          <Contact />
        </section>

        <Footer2></Footer2>
      </Fixlayout>
    </main>
  );
};

export default Home;
