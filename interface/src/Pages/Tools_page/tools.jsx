import React from "react";
import Tools from "../../components/tools/Tools";
import BoodContainer from "../../components/BodyContainer1";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const tools = () => {
  return (
    <div className="main">
      <Header />
      <div style={{marginTop:'5.1rem'}}>
        <Tools />
        <BoodContainer />
        <Footer />
      </div>
    </div>
  );
};

export default tools;
