import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const UserItem = ({ employee, setEmployees }) => {
    const { id, name, email, address, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr className="table-primasry">
            <th>{name}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
           
        </tr>
    )
}

