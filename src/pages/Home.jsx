import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Slider from "../components/Home/Slider";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
