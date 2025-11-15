import React from "react";
import Part1 from "../components/Part1";
import Part2 from "../components/Part2";
import Part3 from "../components/Part3";

import Part6 from "../components/Part6";
import Part7 from "../components/Part7";
import Footer from "../components/Footer";
import LoginNav from "../components/LoginNav";

const BeforeLoginPage = () => {
  return (
    <div>
      <LoginNav />
      <Part1 />
      <Part2 />
      <Part3 />

      {/* <Part5/> */}
      <Part6 />
      <Part7 />
      <Footer />
    </div>
  );
};

export default BeforeLoginPage;
