import React, { useState, useEffect } from "react";
import Preloader from "./components/shared/preloader"; // Import Preloader
import Navbar from "./components/shared/navbar";
import ParticlesComponent from "./components/shared/particles";
import Tracks from "./components/tracks";
import Footer from "./components/shared/footer";
import Landing from "./components/landing";
import About from "./components/about";
import Sponsors from "./components/sponsors";
import Prizes from "./components/prizes";
import Judges from "./components/judges";
import Mentors from "./components/mentors";
import Faq from "./components/faq";
import Timeline from "./components/timeline";
import Contact from "./components/community";
import BackgroundMusic from "./components/bgm";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gifDuration = 2990; // Set this to the actual duration of your GIF in milliseconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after GIF completes
    }, gifDuration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <ParticlesComponent id="particles" />
          <Navbar />
          <BackgroundMusic />
          <section id="home">
            <Landing />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="tracks">
            <Tracks />
          </section>
          <section id="sponsors">
            <Sponsors />
          </section>
          <section id="prizes">
            <Prizes />
          </section>
          <section id="judges">
            <Judges />
          </section>
          <section id="mentors">
            <Mentors />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="faqs">
            <Faq />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
