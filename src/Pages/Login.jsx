import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { editEmployee } from './../service/localstorage';
import './user.css';
import usersData from '../usersStorage/users.json'; // Import the user data

export const Login = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
   
    fin: '',
    adress: '',
    series: '',
    name: '',
    mainadress: '',
    birth: '',
    phone: '',
  });

  const [isChecking, setIsChecking] = useState(false);
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
      navigate('/UserList');
    }, 2000);
  };

  const handleCheckClick = () => {
    const matchingUser = usersData.find((user) => user.fin === inputValues.fin);
    if (matchingUser) {
      setForm(matchingUser); // Automatically fill the form with user data
      setIsMatching(true);
    } else {
      setIsMatching(true);
    }
    setIsChecking(false);
  };

  const handleAddCustomerClick = () => {
    setIsChecking(true);
    setIsMatching(true);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <h1></h1>
        <h1 className="text-center">{id ? "Edit" : "Add new"} Customer</h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p className="ms-5 mt-4 mb-1">Identity card information</p>
            <label className="form-label mt-2" htmlFor="inputValid">
              FIN
            </label>

            <div className="input-group">
              <input
                name="fin"
                required
                type="text"
                value={inputValues.fin}
                onChange={handleInputChange}
                className="form-control"
                id="inputValid"
              />
              {!isChecking ? (
                <button
                  onClick={handleCheckClick}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Check
                </button>
              ) : (
                <button
                  onClick={handleAddCustomerClick}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Add Customer
                </button>
              )}
            </div>
          </div>

          {isChecking && !isMatching && (
            <div className="alert alert-danger mt-3">
              No matching customer found. Please add customer information below.
            </div>
          )}

          {isChecking && isMatching && (
            <div className="alert alert-success mt-3">
              Matching customer found. You can fill in the information below.
            </div>
          )}

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              The actual address
            </label>
            <input
              type="text"
              required
              name="adress"
              value={inputValues.adress}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Series and code
            </label>
            <input
              name="series"
              required
              type="text"
              value={inputValues.series}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              First name Surname Paternal name
            </label>
            <input
              name="name"
              required
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Registration address
            </label>
            <input
              type="text"
              required
              name="mainadress"
              value={inputValues.mainadress}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Date of birth
            </label>
            <input
              name="birth"
              type="date"
              required
              value={inputValues.birth}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Phone
            </label>
            <input
              name="phone"
              required
              type="tel"
              placeholder="050-200-20-20"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              disabled={!isMatching}
            />
          </div>

          {!isChecking && (
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block"
              >
                {id ? "Edit" : "Add"} Customer
              </button>
            </div>
          )}
        </form>
      </div>

      {showAlert && (
        <div className="px-4">
          <div className="alert alert-success">
            <strong>Well done!</strong> {id ? "edit" : "added a new"} Customer.
          </div>
        </div>
      )}
    </div>
  );
};
export default Login