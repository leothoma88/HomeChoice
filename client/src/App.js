import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import QuestionnaireForm from "./components/QuestionnaireForm";
import Results from "./components/Results";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/questionnaire" element={<QuestionnaireForm />}></Route>
          <Route path="/results" element={<Results />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
