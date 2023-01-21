import React from "react";
import "./market.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner/Banner";
import CoinsTable from "../../components/CoinsTable";

const Market = () => {
  return (
    <div className="marketContainer">
      <Header />
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default Market;
