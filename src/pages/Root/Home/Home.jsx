import React from "react";
import Banner from "../../../components/header/Banner";
import { useLoaderData } from "react-router";
import HomeApps from "../../HomeApps/HomeApps";

const Home = () => {
  const homeApps = useLoaderData();
  //   console.log(homeApps);
  return (
    <div>
      <Banner></Banner>
      <HomeApps homeApps={homeApps}></HomeApps>
    </div>
  );
};

export default Home;
