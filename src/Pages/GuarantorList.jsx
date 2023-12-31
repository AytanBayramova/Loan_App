import { GuarantorItem } from './GuarantorItem';
import { useEffect, useState } from 'react';
import { getListGuarantors } from './../service/localstorageG';

export const GuarantorList = () => {
    const [guarantors, setGuarantors] = useState([]);

    useEffect(() => {
        setGuarantors(getListGuarantors());
    }, []);

    

    return (
        <div>
            <h1 className="my-5 text-center">Guarantors Information</h1>

            {
                guarantors.length > 0 ? (
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
                                    guarantors.map(guarantor => <GuarantorItem guarantor={guarantor} key={guarantor.id} setGuarantors={setGuarantors} />)
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