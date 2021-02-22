import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Index;
