import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Email from "./Email";

const Mortgage = ({ number }) => {
  const [loanAmount, setLoanAmount] = useState(0);
  console.log(number, "trippy");
  const [interestRate, setInterestRate] = useState(6);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function handleCalculate() {
    // Convert interest rate to monthly rate
    var monthlyRate = interestRate / 100 / 12;

    // Calculate monthly mortgage payment
    var monthlyPayment =
      (loanAmount * monthlyRate) / (1 - (1 + monthlyRate) ** (-loanTerm * 12));

    // Update monthly payment state
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }

  useEffect(() => {
    setLoanAmount(number);
  }, [number]);
  
  useEffect(() => {
    handleCalculate();
  }, [loanAmount]);


  return (
    <div className="">
      <div className="mortgage-box flex justify-center items-center">
        <div className="rounded-lg m-20 h-2/3 w-2/3  flex justify-center items-center">
          <div>
            <h1 className="bg-[#715959] text-white font-bold my-3 rounded-md">
              Mortgage Calculator
            </h1>

            <form className="criteria flex flex-col text-black font-bold">
              Loan Amount: $
              <input
              className="text-black rounded-md"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(number)}
              />
              <br />
              Interest Rate:{" "}
              <input
              className="text-black rounded-md"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <br />
              Loan Term (in years):{" "}
              <input
              className="text-black rounded-md"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
              <br />
              <input
                className="bg-[#715959] my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                value="Calculate"
                onClick={handleCalculate}
              />
              <div className="my-3 mb-8 top-0 flex justify-center items-center">
                <Email />
                <br />
                <Link to="/questionnaire">
                  <button className=" button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start Over!
                  </button>
                </Link>
              </div>
            </form>
            <p className="bg-[#715959] text-white font-bold py-2 px-4 rounded">
              Monthly Payment: $<span>{monthlyPayment}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mortgage;
