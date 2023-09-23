import { GuarantorItem } from './GuarantorItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';

export const GuarantorList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Guarantors Information</h1>

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
                                    employees.map(employee => <GuarantorItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Guarantor</h3>
                )
            }
         



        </div>

        
    )
}

export default GuarantorList