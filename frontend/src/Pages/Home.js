import React from "react";
import About from "../Components/About";
import Footer from "../Components/Footer";
import ImageSlider from "../Components/ImageSlider";
import PopularBooks from "../Components/PopularBooks";
import RecentAddedBooks from "../Components/RecentAddedBooks";
import Stats from "../Components/Stats";
import WelcomeBox from "../Components/WelcomeBox";

function Home() {
  return (
    <div id="home">
      <ImageSlider />
      <WelcomeBox />
      <About />
      <Stats />
      <RecentAddedBooks />
      <PopularBooks />

      <Footer />
    </div>
  );
}

export default Home;
