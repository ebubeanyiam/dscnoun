import React from "react";
import Disclaimer from "./Disclaimer";
import UpcomingEvents from "./UpcomingEvents";
import CommunityFields from "./CommunityFields";
import HomePageCards from "./HomePageCards";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Disclaimer />
      <UpcomingEvents />
      <CommunityFields />
      <HomePageCards />
    </div>
  );
};

export default HomePage;
