import { UserItem } from './UserItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';
import { useNavigate } from 'react-router-dom';

import './user.css'
export const UserInfo = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
        setEmployees(getListEmployees());
    }, []);

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
                    </div>
                ) : (
                    <h3 className="text-center">No Customer</h3>
                )
            }



        </div>

        
    )
}

export default UserInfo
