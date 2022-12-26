import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';





function QuestionnaireForm(props) {

//Buttons dissapear and reappear
const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);

  const handleButton1Click = () => {
    setShowButton1(false);
    setShowButton2(true);
  }

  const handleButton2Click = () => {
    setShowButton1(true);
    setShowButton2(false);
  }



  // state variable to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  //store answers
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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
    navigate('/results', { state: { formData } });
    

    // submit the form data to the server or do something else with it
  }

  return (
   <div className='flex justify-center sm:flex-wrap'>
    <form className='m-20 h-2/3 w-1/2 bg-[#FFD301]' onSubmit={handleSubmit}>
      {/* first step of the questionnaire */}
      {currentStep === 1 && (
          <div className='flex flex-wrap grid flex justify-center m-10 font-extrabold text-center'>
            <label className="font-sans" htmlFor="name">First Name:</label>
            <input  className="inline-block" name="fname" type="text" id="fname" onChange={handleChange}/>
            <label className="font-sans" htmlFor="name">Last Name:</label>
            <input type="text" name="lname" id="lname" onChange={handleChange}/>
            <label htmlFor="name">Email:</label>
            <input type="text" name="email" id="email" onChange={handleChange}/>
            <label htmlFor="name">Phone Number:</label>
            <input type="text" name='phoneNumber' id="phoneNumber" onChange={handleChange}/>
            <div className="mt-6 flex justify-center">
            <button className=" bg-[#1497D4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
            </div>
          
        </div>
      )}
      {/* second step of the questionnaire */}
      {currentStep === 2 && (
        <div className="flex flex-wrap font-extrabold grid flex justify-center m-10">
          <label>
          Which one of these fits your needs best?
          </label>
          <div className="font-extrabold text-center grid flex justify-center m-10">
            5 bedroom 3 1/2 bathroom
            <input className="mt-1.5"  type="radio" name="bedroomsandBath" value="5" onChange={handleChange} />
           4 bedroom 2 1/2 bathroom
            <input className="mt-1.5"   type="radio" name="bedroomsandBath" value="4" onChange={handleChange} /> 
            3 bedroom 2 1/2 bathroom
            <input className="mt-1.5"   type="radio" name="bedroomsandBath" value="3" onChange={handleChange} /> 
            2 bedroom 1 1/2 bathroom
            <input className="mt-1.5"   type="radio" name="bedroomsandBath" value="2" onChange={handleChange} />
            1 bedroom 1 bathroom 
            <input className="mt-1.5"   type="radio" name="bedroomsandBath" value="1" onChange={handleChange} /> 
          </div>
        
         <div className="flex justify-center"> 
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
            <button className=" bg-[#1497D4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {/* third step of the questionnaire */}
      {currentStep === 3 && (
        <div className="flex flex-wrap font-extrabold grid flex justify-center m-10">
          <label>
          Which style of home would fit your needs the best? 
          </label>
          <div className="font-extrabold text-center grid flex justify-center m-10">
          Single Family Home
          <input className="mt-1.5" type="radio" name="style" value="Single Family Residence" onChange={handleChange} /> 
          Townhouse
          <input className="mt-1.5" type="radio" name="style" value="Townhouse" onChange={handleChange} /> 
          Condo
          <input className="mt-1.5" type="radio" name="style" value="Condo" onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {/* fourth step of the questionnaire */}
      {currentStep === 4 && (
        <div className="flex flex-wrap font-extrabold grid flex justify-center m-10">
          <label>
          How many stories do you need?
          </label>
          <div className="font-extrabold text-center grid flex justify-center m-10">
          Multi/Split
          <input className="mt-1.5" type="radio" name="stories" value="Multi/Split" onChange={handleChange} /> 
          3 or more
          <input className="mt-1.5" type="radio" name="stories" value="3+" onChange={handleChange} />
          2 or more 
          <input className="mt-1.5" type="radio" name="stories" value="2+" onChange={handleChange} /> 
          1 
          <input className="mt-1.5" type="radio" name="stories" value="1" onChange={handleChange} />
          </div>
        
          <div className="flex justify-center">
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {/* fifth step of the questionnaire */}
      {currentStep === 5 && (
        <div  className="flex flex-wrap font-extrabold grid flex justify-center m-10">
          <label>
          How much space do you need?
          </label>

          <div className="font-extrabold text-center grid flex justify-center m-10">
          4000+ sq ft
          <input  className="mt-1.5" type="radio" name="space" value="4000+ sq ft" onChange={handleChange} /> 
          3000+ sq ft
          <input className="mt-1.5" type="radio" name="space" value="3000+ sq ft" onChange={handleChange} /> 
          2000+ sq ft
          <input  className="mt-1.5" type="radio" name="space" value="2000+ sq ft" onChange={handleChange} />
          1200+ sq ft 
          <input className="mt-1.5" type="radio" name="space" value="1200+ sq ft" onChange={handleChange} />
          700+ sq ft 
          <input className="mt-1.5" type="radio" name="space" value="700+ sq ft" onChange={handleChange} /> 
          </div>
          
          <div className="flex justify-center">
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {/* second step of the questionnaire */}
      {currentStep === 6 && (
        <div className="font-extrabold grid flex justify-center m-10">
          <label className='grid ml-18 text-center  flex justify-center'>
          <p className='text-center w-40'>Which areas would you prefer the most?</p>
          </label>

          <div className="font-extrabold text-center grid flex justify-center m-10">
          Gwinnett County
          <input className="mt-1.5" type="radio" name="area" value="Gwinnett" onChange={handleChange} /> 
          North Fulton (Johns Creek,Roswell,Alpharetta
          <input className="mt-1.5" type="radio" name="area" value=" North Fulton" onChange={handleChange} /> 
          Midtown
          <input className="mt-1.5" type="radio" name="area" value="Midtown" onChange={handleChange} /> 
          Cobb County
          <input className="mt-1.5" type="radio" name="area" value="Cobb" onChange={handleChange} /> 
          Dekalb County
          <input className="mt-1.5" type="radio" name="area" value="Dekalb" onChange={handleChange} />
          Douglas County
          <input className="mt-1.5" type="radio" name="area" value="Douglas" onChange={handleChange} /> 
          Henry County
          <input className="mt-1.5" type="radio" name="area" value="Henry" onChange={handleChange} /> 
          </div>
        <div className="flex justify-center">
          <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
          <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleNext}>Next</button>
        </div>
        </div>
      )}
      {/* third step of the questionnaire */}
      {currentStep === 7 && (
        <div className='flex flex-wrap font-extrabold grid flex justify-center m-10'>
          <p className='mb-8 grid flex justify-center'>ARE YOU DONE?</p>
          <div className="flex justify-center">
            <button className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePrev}>Previous</button>
            <button style={{ display: showButton1 ? 'block' : 'none' }}
        onClick={handleButton1Click} className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"type="submit">Submit</button>
            <Link to="/results"><button style={{ display: showButton2 ? 'block' : 'none' }}
        onClick={handleButton2Click} className=" bg-[#1497D4] mx-1.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"type="submit">See My Options</button>
        </Link>
          </div>
        </div>
      )}
    </form>
    
    </div> 


  );
}



export default QuestionnaireForm;

// import { useCallback, useState, useRef } from 'react';


// import 'survey-core/defaultV2.min.css';
// import { StylesManager, Model } from 'survey-core';
// import { Survey } from 'survey-react-ui';

// StylesManager.applyTheme("defaultV2");

// const surveyJson = {
//   pages: [{
//     elements: [{
//       type: "html",
//       html: "<h2>Lets start by identifying the perfect home for you.</h2>"
//     }]
//   },{
//     elements: [{
//         name: "FirstName",
//         title: "Enter your first name:",
//         type: "text"
//       }, {
//         name: "LastName",
//         title: "Enter your last name:",
//         type: "text"
//       },{
//         name: "Email",
//         title: "Enter your email:",
//         type: "text"

//       },{
//         name: "Number",
//         title: "Enter your number:",
//         type: "text"

//       }],
//       isRequired: true

//   }, {
//     elements: [{
//       name: "style",
//       title: "Which one of these fits your needs best?",
//       type: "radiogroup",
//       choices: [
//         { value: 5, text: "5 bedroom 3 1/2 bathroom" },
//         { value: 4, text: "4 bedroom 2 1/2 bathroom" },
//         { value: 3, text: "3 bedroom 2 1/2 bathroom" },
//         { value: 2, text: "2 bedroom 1 bathroom " },
//         { value: 1, text: "1 bedroom 1 bath" }
//       ],
//       isRequired: true
//     }]
//   }, {
//     elements: [{
//         name: "style",
//         title: "Which style of home would fit your needs the best?",
//         type: "radiogroup",
//         choices: [
//           { value: 3, text: "Single Family Home" },
//           { value: 2, text: "Townhouse" },
//           { value: 1, text: "Condo" }
//         ],
//         isRequired: true
//       }]
//     }, {
//         elements: [{
//             name: "stories",
//             title: "How many stories do you need?",
//             type: "radiogroup",
//             choices: [
//               { value: 4, text: "Multi/Split" },
//               { value: 3, text: "3 or more" },
//               { value: 2, text: "2" },
//               { value: 1, text: "1" }
//             ],
//             isRequired: true
//           }]
//   },{
//     elements: [{
//         name: "size",
//         title: "How much space do you need?",
//         type: "radiogroup",
//         choices: [
//           { value: 5, text: "4000+ sq ft" },
//           { value: 4, text: "3000+ sq ft" },
//           { value: 3, text: "2000+ sq ft" },
//           { value: 2, text: "1200+ sq ft" },
//           { value: 1, text: "700+ sq ft" }
//         ],
//         isRequired: true
//       }]
//   },{
//     elements: [{
//         name: "city",
//         title: "Which areas would you prefer the most?",
//         type: "radiogroup",
//         choices: [
//           { value: 7, text: "Gwinnett" },
//           { value: 6, text: "North Fulton (Johns Creek,Roswell,Alpharetta" },
//           { value: 5, text: "Midtown" },
//           { value: 4, text: "Cobb" },
//           { value: 3, text: "Dekalb" },
//           { value: 2, text: "Douglas" },
//           { value: 1, text: "Henry" }
//         ],
//         isRequired: true
//       }]
//   }],
//   showQuestionNumbers: "off",
//   pageNextText: "Next",
//   completeText: "Submit",
//   showPrevButton: false,
//   firstPageIsStarted: true,
//   startSurveyText: "Take the Survey",
//   completedHtml: "Now lets take that info and fine your perfect home",
//   showPreviewBeforeComplete: "showAnsweredQuestions"
// };

// function Main() {
//   // useRef enables the Model object to persist between state changes
//   const survey = useRef(new Model(surveyJson)).current;
//   const [surveyResults, setSurveyResults] = useState([]);
//   const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

//   console.log(surveyResults,"Bsbsdfdsf")
//   console.log(surveyResults.city,"lovie")
 
//   const displayResults = useCallback((sender) => {
//     setSurveyResults(JSON.stringify(sender.data, null, 4));
//     setIsSurveyCompleted(true);
//   }, []);

//   survey.onComplete.add(displayResults);

//   return (
//     <>
//       <Survey model={survey} id="surveyContainer" />
//       {isSurveyCompleted && (
//         <>
//           <p>Result JSON:</p>
//           <code style={{ whiteSpace: 'pre' }}>
//             {surveyResults}
//           </code>
//         </>
//         )
//       }
//     </>
//   );
// }

// export default Main;