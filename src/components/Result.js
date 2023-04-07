import { Stack, Typography } from "@mui/material";
import React from "react";
import { Pie } from 'react-chartjs-2';

const Result = ({ data }) => {
  // destructure the data
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // convert year to month
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  return (
    <Stack>
      <Typography textAlign='center' variant='h5'>Monthly Payment: $ {monthlyPayment.toFixed(2)}</Typography>
    </Stack>
  );
};

export default Result;
