
import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Mortgage from "../Mortgage.jsx";


// afterEach(() => {
//     cleanup(); // Resets the DOM after each test suite
// })


test('Mortgage component calculates monthly payment correctly', () => {
  const { getByLabelText, getByText } = render(<Mortgage />);

  const loanAmountInput = getByLabelText('Loan Amount: $');
  fireEvent.change(loanAmountInput, { target: { value: 100000 } });

  const interestRateInput = getByLabelText('Interest Rate:');
  fireEvent.change(interestRateInput, { target: { value: 6 } });

  const loanTermInput = getByLabelText('Loan Term (in years):');
  fireEvent.change(loanTermInput, { target: { value: 30 } });

  const calculateButton = getByText('Calculate');
  fireEvent.click(calculateButton);

  const monthlyPayment = getByText('Monthly Payment: $').nextSibling;
  expect(monthlyPayment.textContent).toBe('599.55');
});
