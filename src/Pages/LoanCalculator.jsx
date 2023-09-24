import "./LoanCalculator.css";
import LoanJS from "loanjs";
import { useState } from "react";
import './summary.css'
import { Link } from "react-router-dom";
import LoanTable from "./LoanTable"; 
export default function LoanCalculator() {
  const [values, setValues] = useState({
    "loan-type": "",
    "loan-amount": 0,
    "loan-term": 0,
    "interest-rate": 0,
  });

  
  const [installments, setInstallments] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"]
    );
  };

  const calculate = (amount, years, rate) => {
    const loan = new LoanJS.Loan(amount, years * 12, rate);

    setInstallments(loan.installments);
  };

  const amountFormat = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="loan-calculator-container">
      <h1 className="LoanWrite">Loan Calculator</h1>

      <form onSubmit={handleSubmit}>
       

        <div className="form-item">
        <label htmlFor="loan-type">Purpose of loan</label>
        <div className="form-input">
            <select
              name="loan-type"
              value={values["loan-type"]}
              onChange={handleInputChange}
            >
                <option value="">Select a loan type</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Auto Loan">Auto Loan</option>
              <option value="Student Loan">Student Loan</option>
              <option value="Business Loan">Business Loan</option>
            </select>
          </div>
          </div>
          <div className="form-item">
          <label htmlFor="loan-amount">Loan Amount</label>

          
          <div className="form-input">
            <input
              type="number"
              name="loan-amount"
              placeholder="0"
              value={values["loan-amount"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className="form-input">
            <input
              type="number"
              name="interest-rate"
              placeholder="0"
              value={values["interest-rate"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="loan-term">Loan Term (Years)</label>
          <div className="form-input">
            <input
              type="number"
              name="loan-term"
              placeholder="0"
              value={values["loan-term"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-action">
          <input
            type="submit"
            value="Calculate"
            className="calculate-button"
          ></input>
        </div>
      </form>

     
      <div className="loan-table">
        {/* Pass the installments and amountFormat function as props */}
        <LoanTable installments={installments} amountFormat={amountFormat} />
      </div>

    </div>
  );
}
