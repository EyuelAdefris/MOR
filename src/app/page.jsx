import React from "react";
import NavBar from "./home/NavBar";
import Herosection from "./home/Herosection";
import Service from "./home/services";
import News from "./home/News"; // make sure this is a default export
import Revenutotal from "./home/RevenuTotal";
function Page() {
  // Component names should be PascalCase
  return (
    <div>
      <NavBar />
      <Herosection />
      <Service />
      <News />
      <Revenutotal />
    </div>
  );
}

export default Page;
