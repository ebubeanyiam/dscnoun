import React from "react";
import Disclaimer from "./Disclaimer";
import UpcomingEvents from "./UpcomingEvents";
import CommunityFields from "./CommunityFields";

const HomePage = () => {
  return (
    <div>
      <Disclaimer />
      <UpcomingEvents />
      <CommunityFields />
    </div>
  );
};

export default HomePage;
