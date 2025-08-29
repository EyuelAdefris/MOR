import React from "react";
import NavBar from "./home/NavBar";
import Herosection from "./home/Herosection";
import Service from "./home/services";
import News from "./home/News";
import Revenutotal from "./home/RevenuTotal";
import Links from "./home/Important-links";
function Page() {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Service />
      <News />
      <Revenutotal />
      <Links />
    </div>
  );
}

export default Page;
