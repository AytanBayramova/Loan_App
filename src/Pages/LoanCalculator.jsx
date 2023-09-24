import React, { useState } from "react";
import LoanJS from "loanjs";
import './LoanCalculator.css';
import './summary.css';

const LoanCalculator = () => {
  const [values, setValues] = useState({
    "loan-type": "",
    "loan-amount": "",
    "loan-term": "",
    "interest-rate": "",
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
          />
        </div>
      </form>
      <div className="loan-table">
        {!!installments?.length && (
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Payment Amount</th>
                <th>Interest Paid</th>
                <th>Principal Paid</th>
                <th>Remain</th>
              </tr>
            </thead>
            <tbody>
              {installments.map((i, ind) => (
                <tr key={ind}>
                  <td>{ind}</td>
                  <td>{amountFormat(i.installment)}</td>
                  <td>{amountFormat(i.interest)}</td>
                  <td>{amountFormat(i.capital)}</td>
                  <td>{amountFormat(i.remain)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
