import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: '',
    lastName: '',
    emailId: '',
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const navigate = useNavigate();
  const UpdateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.UpdateEmployee(employee, employee.id)
      .then((response) => {
        navigate('/employeeList');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.GetEmployeeById(id);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const Cancel = () => {
    navigate('/employeeList');
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            type="text"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            name="lastName"
            onChange={(e) => handleChange(e)}
            value={employee.lastName}
            className="h-10 w-96 border mt-2 px-2 py-2"
            type="text"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            name="emailId"
            onChange={(e) => handleChange(e)}
            value={employee.emailId}
            className="h-10 w-96 border mt-2 px-2 py-2"
            type="email"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={UpdateEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={Cancel}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
