import { WorkItem } from './WorkItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';

export const WorkList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Customer Activity sector Information</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Monthly income</th>
                                    <th scope="col">Work experience (years)</th>
                                    <th scope="col">Work experience (months)</th>
                                    <th scope="col">Region</th>
                                    <th scope="col">Business address</th>
                                   
                                </tr>
                            </thead>
                           
                            <tbody>
                                {
                                    employees.map(employee => <WorkItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Item</h3>
                )
            }

<div className="ms-5 gap-2 mt-1">
                        <button  type="submit" className="btn btn-outline-primary btn-block">Next</button>
                    </div>

        </div>

        
    )
}

export default WorkList