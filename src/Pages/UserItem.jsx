import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const UserItem = ({ employee, setEmployees }) => {
    const { id, adress, fin, series, name, mainadress, birth,phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr className="table-primasry">
            <td>{adress}</td>
            <td>{fin}</td>
            <td>{series}</td>
            <td>{name}</td>
            <td>{mainadress}</td>
            <td>{birth}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
           
        </tr>
    )
}

