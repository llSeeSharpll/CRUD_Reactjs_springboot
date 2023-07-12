package com.Jadmershad.Employee.Controller;

import com.Jadmershad.Employee.Model.Employee;
import com.Jadmershad.Employee.Services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public Employee CreateEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> GetAllEmployee(){
        return employeeService.getEmployee();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> DeleteEmployee(@PathVariable Long id ){
        boolean deleted=false;
        deleted=employeeService.DeleteEmployee(id);
        Map<String,Boolean> response=new HashMap<>();
        response.put("Deleted",deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> GetEmployeeById(@PathVariable Long id){
        Employee employee = null;
        employee=employeeService.GetEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> UpdateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        employee=employeeService.updateEmployee(id,employee);
        return ResponseEntity.ok(employee);
    }
}
