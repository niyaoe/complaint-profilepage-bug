import React from "react";
import Part1 from "../components/Part1";
import NewNavbar from "../components/NewNavbar";
import Part2 from "../components/Part2";
import Part3 from "../components/Part3";
import Part4 from "../components/Part4";
import Part5 from "../components/Part5";
import Part6 from "../components/Part6";
import Part7 from "../components/Part7";
import Footer from "../components/Footer";
import MobileTopbar from "../components/MobileTopbar";


const MainPage = () => {
  return (
    <div>
      {/* <MobileTopbar/> */}
      {/* <LoginNav/> */}
      <NewNavbar />
      <Part1 />
      <Part2 />
      <Part3/>
      <Part4/>
      {/* <Part5/> */}
      <Part6/>
      <Part7/>
      <Footer/>


    </div>
  );
};

export default MainPage;
