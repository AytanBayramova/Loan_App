import { UserItem } from './UserItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';

export const UserList = () => {
    const [employees, setEmployees] = useState([]);

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
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
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

<div className="ms-5 gap-2 mt-1">
                        <button  type="submit" className="btn btn-outline-primary btn-block">Create a new credit order</button>
                    </div>

        </div>

        
    )
}

export default UserList