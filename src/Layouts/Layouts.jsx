import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Layouts = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loading />}
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
