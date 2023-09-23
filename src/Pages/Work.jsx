import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';
import LoanCalculator from './LoanCalculator';
import Guarantor from './Guarantor';
export const Work = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        income: '',
        experience: '',
        experience1: '',
        region: '',
        biznes: '',
    });


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
        }, 2000);
    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
      <h1></h1>
                <h1 className="text-center">Activity sector</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Monthly income</label>
                        <input
                        
                            type="number"
                            name="income"
                            value={inputValues.income}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                    

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Work experience (years)</label>
                       
                        <input
                       
                            name="experience"
                            type="number"
                            value={inputValues.experience}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Work experience (months)</label>
                        <input
                       
                            name="experience1"
                            type="nuumber"
                            value={inputValues.experience1}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Region</label>
                        <input
                       
                            name="region"
                            type="text"
                            value={inputValues.region}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>



                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Business address</label>
                        <input
                        
                            type="text"
                            name="biznes"
                            value={inputValues.biznes}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                 


                    <div className="d-grid gap-2 mt-3">
                        <button  type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} </button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-4">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"}
                        </div>
                    </div>
                )
            }

<LoanCalculator/>
<Guarantor/>
<div className="ms-5 gap-2 mt-1">
                        <button onClick={() => navigate("/Summary")}  type="submit" className="btn btn-outline-primary 
                        ">Next</button>
                    </div>

        </div >
    )
}



export default Work