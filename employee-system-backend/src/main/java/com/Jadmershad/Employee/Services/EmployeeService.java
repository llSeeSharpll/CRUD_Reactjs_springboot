package com.Jadmershad.Employee.Services;


import com.Jadmershad.Employee.Model.Employee;
import com.Jadmershad.Employee.Repository.EmployeeRepository;

import java.util.List;

public interface EmployeeService {
    Employee GetEmployeeById(Long id);

    Employee createEmployee(Employee employee);

    List<Employee> getEmployee();

    boolean DeleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
