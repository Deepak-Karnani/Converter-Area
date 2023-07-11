import React from 'react'

import "./main.css";
import HomeTitle from '../../components/home-title/HomeTitle';
import Tools from "../../components/tools/Tools";
import BoodContainer from '../../components/BodyContainer1';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'

const Main = () => {

  return (
    <div className="main">
      <Header />
      <HomeTitle />
      <Tools />
      <BoodContainer />
      <Footer />
    </div>
  )
}

export default Main