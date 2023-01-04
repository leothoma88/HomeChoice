import { Link } from "react-router-dom";
import React, { useState } from 'react';



const Mortgage = (props) => {
  const [loanAmount, setLoanAmount] = useState(props.number);
  const [interestRate, setInterestRate] = useState(7);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function handleCalculate() {
    // Calculate monthly mortgage payment
    var monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 / (1 + interestRate), loanTerm));

    // Update monthly payment state
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }




  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg m-20 h-2/3 w-2/3  flex justify-center items-center">
        <div>
      <h1 className="bg-[#715959] text-white font-bold my-3">Mortgage Calculator</h1>
      <form>
        
        Loan Amount: $<input type="number" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} /><br />
        Interest Rate: <input type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)} /><br />
        Loan Term (in years): <input type="number" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} /><br />
        
        
        <input className="bg-[#715959] my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" value="Calculate" onClick={handleCalculate} />


        <div className="my-3 mb-8 top-0 flex justify-center items-center">
      <button className="mx-1.5 bg-[#715959] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Lender!
          </button>
          <br/>
        <Link to="/questionnaire">
          <button className=" bg-[#715959] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Over!
          </button>
        </Link>
      </div>

      </form>
      <p className="bg-[#715959] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Monthly Payment: $<span>{monthlyPayment}</span></p>
    </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Mortgage;
