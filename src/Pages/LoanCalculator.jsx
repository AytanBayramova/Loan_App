import "./LoanCalculator.css";
import LoanJS from "loanjs";
import { useState } from "react";


export default function LoanCalculator() {
  const [values, setValues] = useState({
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
          <label htmlFor="loan-amount">Purpose of loan</label>

          
          <div className="form-input">
    <input
      type="radio"
      name="loan-purpose"
      value="Working Capital"
      checked={values["loan-purpose"] === "Working Capital"}
      onChange={handleInputChange}
    />
    <label htmlFor="loan-purpose-working-capital">Working Capital</label>

    <input
      type="radio"
      name="loan-purpose"
      value="Business Expansion"
      checked={values["loan-purpose"] === "Business Expansion"}
      onChange={handleInputChange}
    />
    <label htmlFor="loan-purpose-business-expansion">Business Expansion</label>

    <input
      type="radio"
      name="loan-purpose"
      value="Equipment Financing"
      checked={values["loan-purpose"] === "Equipment Financing"}
      onChange={handleInputChange}
    />
    <label htmlFor="loan-purpose-equipment-financing">Equipment Financing</label>

    <input
      type="radio"
      name="loan-purpose"
      value="Inventory Financing"
      checked={values["loan-purpose"] === "Inventory Financing"}
      onChange={handleInputChange}
    />
    <label htmlFor="loan-purpose-inventory-financing">Inventory Financing</label>

    <input
      type="radio"
      name="loan-purpose"
      value="Startup Capital"
      checked={values["loan-purpose"] === "Startup Capital"}
      onChange={handleInputChange}
    />
    <label htmlFor="loan-purpose-startup-capital">Startup Capital</label>
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
  );
}
