import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = ({ employee, DeleteEmployee }) => {
  const navigate = useNavigate();
  const EditEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateemployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => EditEmployee(e, employee.id)}
          href="#"
          className="text-indigo-600 hover:text-indigo-800 px-4"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => DeleteEmployee(e, employee.id)}
          href="#"
          className="text-indigo-600 hover:text-indigo-800 "
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
