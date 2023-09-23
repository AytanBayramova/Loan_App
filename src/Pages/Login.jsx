import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';
import './user.css'
export const Login = () => {
    const navigate = useNavigate();

    const handlButtonClick = () => {
      navigate('/UserList'); // Navigate to the '/home' route when the button is clicked
    };
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        adress: '',
        fin: '',
        series: '',
        name: '',
        mainadress: '',
        birth: '',
        phone: ''
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
                <h1 className="text-center">{id ? "Edit" : "Add new"} Customer</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">The actual address</label>
                        <input
                        
                            type="text"
                            required
                            name="adress"
                            value={inputValues.adress}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>
                    

                    <div className="form-group">
                    <p className=' ms-5 mt-4 mb-1'>Identity card information</p>
                        <label className="form-label mt-2" htmlFor="inputValid">FIN</label>
                       
                        <input
                       
                            name="fin"
                            required
                            type="text"
                            value={inputValues.fin}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Series and code</label>
                        <input
                       
                            name="series"
                            required
                            type="text"
                            value={inputValues.seria}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">First name Surname Paternal name</label>
                        <input
                       
                            name="name"
                            required
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>



                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Registration address</label>
                        <input
                        
                            type="text"
                            required
                            name="mainadress"
                            value={inputValues.mainadress}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Date of birth</label>
                        <input
                       
                            name="birth"
                            type="date"
                            required
                            value={inputValues.birth}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Phone</label>
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
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button    type="submit" className="btn  btn-outline-primary btn-block">{id ? "Edit" : "Add"} Customer</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-4">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Customer.
                        </div>
                    </div>
                )
            }

        </div >
        
    )
}

export default Login