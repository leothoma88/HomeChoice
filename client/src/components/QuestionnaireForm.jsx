import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
function QuestionnaireForm(props) {
  //Buttons dissapear and reappear
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);

  const handleButton1Click = () => {
    setShowButton1(false);
    setShowButton2(true);
  };

  // const handleButton2Click = () => {
  //   setShowButton1(true);
  //   setShowButton2(false);
  // };

  // state variable to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  //store answers
  const [formData, setFormData] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const form = document.querySelector("form");
  //   setIsSubmitDisabled(!form.checkValidity());
  // }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  // event handler for moving to the next step
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // event handler for moving to the previous step
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/results", { state: { formData } });
  };

  const verify = () =>
    !_.isEmpty(formData.area) &&
    !_.isEmpty(formData.bedroomsandBath) &&
    !_.isEmpty(formData.email) &&
    !_.isEmpty(formData.fname) &&
    !_.isEmpty(formData.lname) &&
    !_.isEmpty(formData.phoneNumber) &&
    !_.isEmpty(formData.space) &&
    !_.isEmpty(formData.style);

  useEffect(() => {
    if (verify()) {
      setIsSubmitDisabled(false);
    }
  }, [formData]);

  console.log("form data", formData);
  console.log("verify", verify());

  return (
    <div className="h-screen flex justify-center sm:flex-wrap">
      <form
        className="question-form m-20 h-2/3 w-1/2 rounded-md "
        onSubmit={handleSubmit}
      >
        {/* first step of the questionnaire */}
        {currentStep === 1 && (
          <div className="flex flex-wrap grid flex justify-center m-8 font-extrabold text-center">
            <label className="font-sans" htmlFor="name">
              First Name:
            </label>
            <input
              className="inline-block rounded-md"
              name="fname"
              type="text"
              id="fname"
              onChange={handleChange}
            />
            <label className="font-sans" htmlFor="name">
              Last Name:
            </label>
            <input
              className="inline-block rounded-md"
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
            />
            <label htmlFor="name">Email:</label>
            <input
              className="inline-block rounded-md"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label htmlFor="name">Phone Number:</label>
            <input
              className="inline-block rounded-md"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
            />
            <div className="mt-6 flex justify-center">
              <button
                className="button font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* second step of the questionnaire */}
        {currentStep === 2 && (
          <div className="flex flex-wrap font-extrabold grid flex justify-center m-8 rounded-2xl">
            <label className="prompt">
              Which one of these fits your needs best?
            </label>
            <div className="font-extrabold text-start grid flex justify-center m-8">
              {/* choice 1 */}
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="bedroomsandBath"
                  value="5"
                  onChange={handleChange}
                />
                🛏️ 5 bedroom 🛀 3.5 bathroom
              </div>
              {/* choice 2 */}
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="bedroomsandBath"
                  value="4"
                  onChange={handleChange}
                />
                🛏️ 4 bedroom 🛀 2.5 bathroom
              </div>

              {/* choice 3 */}
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="bedroomsandBath"
                  value="3"
                  onChange={handleChange}
                />
                🛏️ 3 bedroom 🛀 2.5 bathroom
              </div>
              {/* choice 4 */}
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="bedroomsandBath"
                  value="2"
                  onChange={handleChange}
                />
                🛏️ 2 bedroom 🛀 1.5 bathroom
              </div>
              {/* choice 5 */}
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="bedroomsandBath"
                  value="1"
                  onChange={handleChange}
                />
                🛏️ 1 bedroom 🛀 1 bathroom
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="button  mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className=" button  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* third step of the questionnaire */}
        {currentStep === 3 && (
          <div className="flex flex-wrap font-extrabold grid flex justify-center m-8">
            <label className="prompt">
              Which style of home would fit your needs the best?
            </label>
            <div className="font-extrabold text-start grid flex justify-center m-8">
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="style"
                  value="single_family"
                  onChange={handleChange}
                />
                👪 Single Family Home
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="style"
                  value="multi_family"
                  onChange={handleChange}
                />
                🏘️ Townhouse
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="style"
                  value="farm"
                  onChange={handleChange}
                />
                🏠 Farm
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className="button  mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* fourth step of the questionnaire */}
        {currentStep === 4 && (
          <div className="flex flex-wrap font-extrabold grid flex justify-center m-8">
            <label className="prompt">How many stories do you need?</label>
            <div className="font-extrabold text-start grid flex justify-center m-8">
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="story"
                  value="multi"
                  onChange={handleChange}
                />
                3+
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="story"
                  value="multi"
                  onChange={handleChange}
                />
                3
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="story"
                  value="multi"
                  onChange={handleChange}
                />
                2
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="story"
                  value="single"
                  onChange={handleChange}
                />
                1 story
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* fifth step of the questionnaire */}
        {currentStep === 5 && (
          <div className="flex flex-wrap font-extrabold grid flex justify-center m-8">
            <label className="prompt">How much space do you need?</label>

            <div className="font-extrabold text-start grid flex justify-center m-8">
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="space"
                  value="3750"
                  onChange={handleChange}
                />
                4000+ sq ft
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="space"
                  value="3000"
                  onChange={handleChange}
                />
                3000+ sq ft
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="space"
                  value="2000"
                  onChange={handleChange}
                />
                2000+ sq ft
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="space"
                  value="1200"
                  onChange={handleChange}
                />
                1200+ sq ft
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="space"
                  value="750"
                  onChange={handleChange}
                />
                700+ sq ft
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* second step of the questionnaire */}
        {currentStep === 6 && (
          <div className="font-extrabold grid flex justify-center m-8">
            <label className="prompt grid ml-18 text-center  flex justify-center">
              Which areas would you prefer the most?
            </label>

            <div className="font-extrabold text-start grid flex justify-center m-8">
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Snellville"
                  onChange={handleChange}
                />
                Snellville
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Roswell"
                  onChange={handleChange}
                />
                Roswell
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Atlanta"
                  onChange={handleChange}
                />
                Atlanta
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Kennesaw"
                  onChange={handleChange}
                />
                Kennesaw
              </div>
              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Decatur"
                  onChange={handleChange}
                />
                Decatur
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Douglasville"
                  onChange={handleChange}
                />
                Douglasville
              </div>

              <div>
                <input
                  className="mt-1.5"
                  type="radio"
                  name="area"
                  value="Mcdonough"
                  onChange={handleChange}
                />
                McDonough
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="button  mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* third step of the questionnaire */}
        {currentStep === 7 && (
          <div className="flex flex-wrap font-extrabold grid flex justify-center m-8">
            <div className="mb-8 grid flex justify-center">
              ALL DONE!
              <div>
                {formData ? (
                  <div className="criteria">
                    <p> Area: {formData.area}</p>
                    <p> Bed: {formData.bedroomsandBath}</p>
                    <p>Bath: {formData.bedroomsandBath} </p>
                    <p> Space: {formData.space}</p>
                    <p> Stories: {formData.story}</p>
                    <p>Style: {formData.style} </p>
                  </div>
                ) : (
                  <p>loading. . .</p>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                // style={{ display: showButton1 ? "block" : "none" }}
                onClick={handleButton1Click}
                className=" button mx-1.5  text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default QuestionnaireForm;
