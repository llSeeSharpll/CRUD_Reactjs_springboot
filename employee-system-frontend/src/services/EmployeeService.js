import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
  SaveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  GetEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  DeleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
  }
  GetEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
  }
  UpdateEmployee(employee, id) {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
  }
}

export default new EmployeeService();
