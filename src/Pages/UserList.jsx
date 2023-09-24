import { UserItem } from './UserItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';
import { useNavigate } from 'react-router-dom';

import './user.css'
export const UserList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
        setEmployees(getListEmployees());
    }, []);

    const handleNextClick = () => {
        navigate('/Work');
    };

    return (
        <div>
            <h1 className="my-5 text-center">Customer Information</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Adress</th>
                                    <th scope="col">FIN</th>
                                    <th scope="col">Series</th>
                                    <th scope="col">FirstName Surname Paternal name</th>
                                    <th scope="col">Registration address</th>
                                    <th scope="col">Date of birth</th>
                                    <th scope="col">Phone</th>
                                </tr>
                                
                            </thead>
                           
                            <tbody>
                                {
                                    employees.map(employee => <UserItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>

                        <div className="ms-5 gap-2 mt-1">
                        <button type="submit" onClick={handleNextClick} className="btn btn-outline-primary">Next</button>
                    </div>

                    </div>
                ) : (
                    <h3 className="text-center">No Customer</h3>
                )
            }



        </div>

        
    )
}

export default UserList
