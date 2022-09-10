import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SliderVideo from "./components/SliderVideo/SliderVideo";
import QuickProductCategory from "./components/QuickProductCategory/QuickProductCategory";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="flex-container bg-[#eaeded] w-full absolute">
        <Header />
        <div className="w-full">       
          <SliderVideo />
          <QuickProductCategory />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
