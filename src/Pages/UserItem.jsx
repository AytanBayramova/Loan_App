import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';
import './guarantor.css' 
export const UserItem = ({ employee, setEmployees }) => {
    const { id, adress, fin, series, name, mainadress, birth,phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr className="table-primasry">
            <td className="table-cell">{adress}</td>
            <td className="table-cell">{fin}</td>
            <td className="table-cell">{series}</td>
            <td className="table-cell">{name}</td>
            <td className="table-cell">{mainadress}</td>
            <td className="table-cell">{birth}</td>
            <td className="table-cell">{phone}</td>
            <td>
                <div className="d-flex gap-3">
                <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
           
        </tr>
    )
}

