import React, { useState, useEffect } from "react";
import Mortgage from "./Mortgage";

import { json, useLocation } from "react-router-dom";
import Home from "../assets/pexels-binyamin-mellish-106399.jpg";
import { Link } from "react-router-dom";

function Results() {
  const location = useLocation();
  const formData = location.state.formData || {};

  const {
    area,
    bedroomsandBath,
    email,
    fname,
    lname,
    phoneNumber,
    space,
    stories,
    style,
  } = location.state?.formData;

  //Visibility
  const [isVisible, setIsVisible] = useState(true);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [currentProp, setCurrentProp] = useState(0);

  const toggleVisibility = (property) => {
    setIsVisible(!isVisible);
    setIsSecondVisible(!isSecondVisible);
    setCurrentProp(property);
  };

  //This takes mortgage number and puts it in a hook
  const [number, setNumber] = useState(0);

  //Hook used to go through different houses
  //Hook used to format data
  const [houseArray, setHouseArray] = useState([]);
  async function fetchData() {
    const response = await fetch(
      `https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=42&state_code=GA&city=Atlanta&sort=newest&beds_min=${bedroomsandBath}&baths_min=${bedroomsandBath}&property_type=multi_family&home_size_min=${space}&stories=single`,
      {
        headers: {
          "X-RapidAPI-Key":
            "72ddbc841bmsh8b56aa2a6ef50e7p1e74f1jsn17c984253b3e",
          "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
        },
      }
    );

    const json = await response.json();
    console.log("json..", json);
    const { status, data } = json;
    console.log(data,"hhjh")
    const houseData = data.results;
   

    setHouseArray(houseData);
  }

  

  console.log("house Arry", houseArray);
  //Pull API DATA
  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = () => {
    // let index = 0;
    setNumber(number + 1);
    // index++;
  };

  // On click function that lets you navigate through an array of data
  //This break down the data to an object
  const { status, data } = houseArray || {};

  return (
    <div className="results flex justify-center items-center">
      <div
        style={{ display: isVisible ? "block" : "none" }}
        className="rounded-lg m-20 h-1/2 w-2/3"
      >
        <div className="question-form  subpixel-antialiased text-center flex items-center font-sans text-lg sm:text-7xl sm: text-white">
          {houseArray ? (
            <div>
              Price: ${houseArray[number]?.list_price}
              <img
                className="homeimage"
                alt="homeimage"
                src={houseArray[number]?.primary_photo.href || { Home }}
              ></img>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex flex-col justify-center sm:flex-row ">
          <button
            onClick={() => toggleVisibility(houseArray[number].list_price)}
            className="m-10 w-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            This is the one!
          </button>
          <button
            onClick={handleNext}
            className="m-10 w-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next One
          </button>
          <Link to="/questionnaire">
            <button className="m-10 w-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Over
            </button>
          </Link>
        </div>
        <div className="result-criteria grid grid-col-1">
          <div className=" font-extrabold  grid flex justify-center">
            <br />
            <br />
            <h3>Your Criteria:</h3>
            <p>${houseArray[number]?.list_price}</p>
            <p>First: {formData.fname}</p>

            <p>Last: {formData.lname}</p>
            <br />
            <p>Email: {formData.email}</p>
            <br />
            <p>Number: {formData.phoneNumber}</p>
            <br />
            <p>Bed Minimum: {formData.bedroomsandBath}</p>
            <br />
            <p>Sq Fr: {formData.space}</p>
            <br />
            <p>Style : {formData.style}</p>
            <br />
            <p>Floors: {formData.story}</p>
            <br />
          </div>
        </div>
      </div>
      <div style={{ display: isSecondVisible ? "block" : "none" }}>
        <Mortgage number={currentProp} />
      </div>
    </div>
  );
}

export default Results;
