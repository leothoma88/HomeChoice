import QuestionnaireForm from "./QuestionnaireForm";
import React, { useState, useEffect } from "react";

import { json, useLocation } from "react-router-dom";
import Home from "../assets/pexels-binyamin-mellish-106399.jpg";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_HOMES } from '../utils/queries';

function Results() {
  const location = useLocation();
  const formData = location.state.formData;

  console.log(" !!caught ... ", formData);
  //Hook used to format data

  const [data2, setData] = useState(null);

  //Pull API DATA
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=42&state_code=GA&city=Atlanta&sort=newest&beds_min=3&baths_min=2&property_type=multi_family&home_size_min=1200&stories=single`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "72ddbc841bmsh8b56aa2a6ef50e7p1e74f1jsn17c984253b3e",
            "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
          },
        }
      );
      const json = await response.json();
      console.log(json, "RIGHT HERE");
      setData(json);
    }
    fetchData();
  }, []);

  console.log(formData, "What");

  //This break down the data to an object
  const { status, data } = data2 || {};

  console.log(data.results[1].primary_photo.href, "What??");

  return (
    <div className="results flex justify-center items-center">
      <div className="rounded-lg m-20 h-1/2 w-2/3">
        <div className="question-form  subpixel-antialiased text-center flex items-center font-sans text-lg sm:text-7xl sm: text-white">
          <img
            className="homeimage"
            alt="homeimage"
            src={data.results[1].primary_photo.href}
          ></img>
        </div>
        <div className="grid grid-col-1">
          <div className=" font-extrabold  grid flex justify-center">
            <h2 className="text-xl">Price:</h2>
            <p className="bg-white text-amber-300 text-2xl">
              {data.results[1].list_price}
            </p>
            <br />
            <br />
            <h1>Your Criteria:</h1>
            <p>
              <br />
            </p>
            <p>First: {formData.fname}</p>
            <n />
            <p>Last: {formData.lname}</p>
            <n />
            <p>Email: {formData.email}</p>
            <n />
            <p>Number: {formData.phoneNumber}</p>
            <n />
            <p>Bed Minimum: {formData.bedroomsandBath}</p>
            <n />
            <p>Sq Fr: {formData.space}</p>
            <n />
            <p>Style : {formData.style}</p>
            <n />
            <p>Floors: {formData.stories}</p>
            <n />
          </div>
          <div className="flex flex-col justify-center sm:flex-row ">
            <button className="m-10 w-1/2 bg-[#1497D4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              This is the one!
            </button>
            <button className="m-10 w-1/2 bg-[#1497D4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next One
            </button>
            <Link to="/questionnaire">
              <button className="m-10 w-1/2 bg-[#1497D4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Over
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
