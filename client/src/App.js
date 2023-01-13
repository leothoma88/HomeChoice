import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mortgage from "./components/Mortgage";
import QuestionnaireForm from "./components/QuestionnaireForm";
import Results from "./components/Results";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import house1 from "./assets/images/house1.jpeg";
import house2 from "./assets/images/house2.jpeg";

function App() {
  const imageArray = [
    house1,
    house2,
    "https://architecturebeast.com/wp-content/uploads/2018/04/Simple-modern-house-with-an-amazing-floating-stairs-Architecture-Beast-33-main-min-2-min.jpg",
    "https://www.architectureartdesigns.com/wp-content/uploads/2017/07/15-Compelling-Contemporary-Exterior-Designs-Of-Luxury-Homes-Youll-Love-15.jpg",
    "https://d8oklrjckdahn.cloudfront.net/library/MwGo/2016/9/7/11G113148/Images/Contemporary_home_by_Newgrowth-3b04b680e671bc0fbf54e9801ee8c137.jpg",
    "http://maricamckeel.com/wp-content/uploads/2017/11/09a_the-cresta-20.jpg",
  ];
  const [bkImg, setBkImg] = useState(0);

  const updateImage = () => {
    setBkImg((bkImg + 1) % imageArray.length);
  };

  useEffect(() => {
    setInterval(updateImage, 25000);
  }, []);

  const style = {
    backgroundImage: `url(${imageArray[bkImg]})`,
    
  };

  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/questionnaire" element={<QuestionnaireForm />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="/mortgage" element={<Mortgage />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
