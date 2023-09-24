import React from 'react'
import { removeWork } from '../service/localstorageWork';
import { getListWorks } from '../service/localstorageWork';
import { useNavigate } from 'react-router-dom';
import './guarantor.css'
export const WorkItem = ({ work, setworks }) => {
    const { id, income, experience, experience1, region, biznes } = work;
    const navigate = useNavigate();

    const deleteWork = () => {
        removeWork(id);
        setworks(getListWorks());
    }

    return (
        <tr className="table-primasry">
            <td className="table-cell">{income}</td>
            <td className="table-cell">{experience}</td>
            <td className="table-cell">{experience1}</td>
            <td className="table-cell">{region}</td>
            <td className="table-cell">{biznes}</td>
           
            <td>
                <div className="d-flex gap-3">
                {/* <span type="button" className="badge bg-danger" onClick={() => deleteWork()}>Delete</span> */}

                </div>
            </td>
           
        </tr>
    )
}

