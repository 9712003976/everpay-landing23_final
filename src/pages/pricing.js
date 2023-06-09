import React, { useState } from "react";
import Pricing from "../components/Shop";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PricingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Pricing />
    </>
  );
};

export default PricingPage;
