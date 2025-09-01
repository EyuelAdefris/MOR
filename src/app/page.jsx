import React from "react";
import NavBar from "./home/NavBar";
import Herosection from "./home/Herosection";
import Service from "./home/services";
import News from "./home/News";
import RevenuBar from "./home/RevenuBar";
import Links from "./home/Important-links";
import Fotter from "./home/fotter";
function Page() {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Service />
      <News />
      <RevenuBar />
      <Links />
      <Fotter />
    </div>
  );
}

export default Page;
