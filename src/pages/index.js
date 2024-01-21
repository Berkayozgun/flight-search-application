import React from "react";
import Home from "./Home.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Banner />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
