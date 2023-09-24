import React from 'react'
import { removeGuarantor } from '../service/localstorageG';
import { getListGuarantors } from '../service/localstorageG';
import { useNavigate } from 'react-router-dom';
import './guarantor.css'
export const GuarantorItem = ({ guarantor, setGuarantors }) => {
    const { id, adress, fin, series, name, mainadress, birth,phone } = guarantor;
    const navigate = useNavigate();

    const deleteGuarantor = () => {
        removeGuarantor(id);
        setGuarantors(getListGuarantors());
    }

    return (
       
        <tr className="table-primasry">
            <td  className="table-cell">{adress}</td>
            <td  className="table-cell">{fin}</td>
            <td  className="table-cell">{series}</td>
            <td  className="table-cell">{name}</td>
            <td  className="table-cell">{mainadress}</td>
            <td  className="table-cell">{birth}</td>
            <td  className="table-cell">{phone}</td>
            <td  className="table-cell">
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-danger" onClick={() => deleteGuarantor()}>Delete</span>
                </div>
            </td>
           
        </tr>
        

    )
}

