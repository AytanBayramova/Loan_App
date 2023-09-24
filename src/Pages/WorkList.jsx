import { WorkItem } from './WorkItem';
import { useEffect, useState } from 'react';
import { getListWorks } from './../service/localstorageWork';

export const WorkList = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        setWorks(getListWorks());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Customer Activity sector Information</h1>

            {
                works.length > 0 ? (
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
                                    works.map(work => <WorkItem work={work} key={work.id} setWorks={setWorks} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Item</h3>
                )
            }



        </div>

        
    )
}

export default WorkList