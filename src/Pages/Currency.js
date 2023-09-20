
import React from "react";
import Select from "react-select";

import "../styles/style.css";

import selectOptions from "../utill/selectOption.json";
import controlList from "../utill/controls.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      details: {
        numberOfMonths: "",
        interestRate: "",
        monthlyPaymentAmount: "",
        loanAmount: "",
        termLength: ""
      },
      selectedOption: "FM",
      error: false,
      resultLabel: "Mortgage"
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  onSubmitHandle(e) {
    e.preventDefault();
    this.calculateAndSetResults();
  }

  clearAll() {
    this.setState({
      error: false,
      details: {
        numberOfMonths: "",
        interestRate: "",
        monthlyPaymentAmount: "",
        loanAmount: "",
        termLength: ""
      },
      result: 0
    });
  }

  setError() {
    this.setState({ error: true });
  }

  setResult(result) {
    this.setState({ result });
  }

  calculateAndSetResults() {
    /* eslint no-eval: 0 */
    let result = 0;
    let loanAmount;
    let interestRate;
    let numberOfMonths;
    let monthlyPaymentAmount;
    switch (this.state.selectedOption) {
      case "FM":
        if (
          this.state.details.loanAmount.trim() !== "" &&
          this.state.details.interestRate.trim() !== "" &&
          this.state.details.termLength.trim() !== ""
        ) {
          loanAmount = eval(this.state.details.loanAmount);
          interestRate = eval(this.state.details.interestRate / 1200);
          numberOfMonths = eval(this.state.details.termLength * 12);
          result =
            eval(loanAmount * interestRate) /
            (1 - Math.pow(1 + interestRate, numberOfMonths * -1)).toFixed(2);
          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FLA":
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        interestRate = this.state.details.interestRate;
        if (
          monthlyPaymentAmount !== "" &&
          numberOfMonths !== "" &&
          interestRate !== ""
        ) {
          interestRate = interestRate / 1200;
          result = eval(
            (monthlyPaymentAmount / interestRate) *
              (1 - 1 / Math.pow(1 + interestRate, numberOfMonths))
          ).toFixed(2);
          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FMP":
        loanAmount = this.state.details.loanAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        interestRate = this.state.details.interestRate;
        if (loanAmount !== "" && numberOfMonths !== "" && interestRate !== "") {
          interestRate = interestRate / 1200;
          result = eval(
            (loanAmount *
              interestRate *
              Math.pow(1 + interestRate, numberOfMonths)) /
              (Math.pow(1 + interestRate, numberOfMonths) - 1)
          ).toFixed(2);

          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FIR":
        loanAmount = this.state.details.loanAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        if (
          monthlyPaymentAmount !== "" &&
          numberOfMonths !== "" &&
          loanAmount !== ""
        ) {
          const F = (x) =>
            (loanAmount * x * Math.pow(1 + x, numberOfMonths)) /
              (Math.pow(1 + x, numberOfMonths) - 1) -
            monthlyPaymentAmount;
          const F_prime = (x) =>
            (loanAmount *
              Math.pow(x + 1, numberOfMonths - 1) *
              (x * Math.pow(x + 1, numberOfMonths) +
                Math.pow(x + 1, numberOfMonths) -
                numberOfMonths * x -
                x -
                1)) /
            Math.pow(Math.pow(x + 1, numberOfMonths) - 1, 2);

          const guess =
            1 + ((monthlyPaymentAmount * numberOfMonths) / loanAmount - 1) / 12;

          let x = guess;

          while (Math.abs(F(x)) > 1e-6) {
            x = x - F(x) / F_prime(x);
          }
          x = (12 * x * 100).toFixed(2);
          result = `${x}%`;
        } else {
          this.setError();
        }
        break;

      case "FNM":
        loanAmount = this.state.details.loanAmount;
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        interestRate = this.state.details.interestRate;
        if (
          loanAmount !== "" &&
          monthlyPaymentAmount !== "" &&
          interestRate !== ""
        ) {
          interestRate = interestRate / 1200;
          result = eval(
            Math.log(
              monthlyPaymentAmount /
                interestRate /
                (monthlyPaymentAmount / interestRate - loanAmount)
            ) / Math.log(1 + interestRate)
          ).toFixed(2);
        } else {
          this.setError();
        }
        break;
      default:
        break;
    }

    this.setResult(result);
  }

  onChangeHandle({ value, resultLabel }) {
    this.clearAll();
    this.setState({ selectedOption: value, resultLabel: resultLabel });
  }

  onInputChange(e, type) {
    e.persist();
    this.setState((state) => {
      state.details[type] =
        e.target.value.trim() >= 0 ? e.target.value.trim() : "";
      state.result = 0;
      state.error = false;
      return state;
    });
  }

  Error() {
    return (
      <div
        className="errorWrap align-center"
        style={{
          display: (this.state.error && "flex") || "none",
          color: "red"
        }}
      >
        <em>Please insert vaild inputs!</em>
      </div>
    );
  }

  Results() {
    return (
      <div
        className="resultBlock"
        style={{ display: (this.state.result && "flex") || "none" }}
      >
        <span className="resultIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <g fill="none">
              <path
                fill="#6DD400"
                d="M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9C-.014 4.044 3.992.014 8.949 0H9z"
              />
              <path
                fill="#FFF"
                d="M13.986 6.52L7.594 12.912 4.014 9.358 5.472 7.926 7.594 10.023 12.528 5.088z"
              />
            </g>
          </svg>
        </span>
        <span className="resultText">
          Result: {this.state.resultLabel} = {this.state.result}
        </span>
      </div>
    );
  }

  renderInputControls() {
    const list = controlList[this.state.selectedOption];

    return (
      <React.Fragment>
        {list.map((item) => {
          return (
            <div className="input-control flex_1" key={item.event}>
              <label>{item.label}</label>
              <input
                type="number"
                onChange={(e) => this.onInputChange(e, item.event)}
                value={this.state.details[item.event]}
              />
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="wrapperInner">
          <h2 className="heading">Loan Calculator</h2>
          <form className="form" onSubmit={(e) => this.onSubmitHandle(e)}>
            <div className="select-control">
              <label>Please Select Type</label>
              <Select
                options={selectOptions}
                onChange={(obj) => this.onChangeHandle(obj)}
                isSearchable={false}
                isClearable={false}
                defaultValue={selectOptions[0]}
              />
            </div>
            <div className="form__input--control">
              {this.renderInputControls()}
            </div>
            <div className="buttonsControlWrap flex direction-column align-center">
              <button
                type="submit"
                className="submitBtn "
                data-event_tag="CalculateBtnClick"
                data-event_action="UserClick"
              >
                Calculate
              </button>
              <button
                type="button"
                className="cancelBtn "
                data-event_tag="ClearAllClick"
                data-event_action="UserClick"
                onClick={this.clearAll}
              >
                Clear All
              </button>
            </div>
          </form>
          {this.Error()}
          {this.Results()}
        </div>
      </div>
    );
  }
}
