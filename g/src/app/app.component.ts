import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string[] = ['Kiran', 'Pravin', 'Vaibhav', 'Dinesh', 'Santosh'];
  allEmployees: Employee[] = [
    { employeeId: 101, name: 'Kiran', Salary: 25000 },
    { employeeId: 102, name: 'Santosh', Salary: 75000 },
    { employeeId: 103, name: 'Dinesh', Salary: 85000 },
    { employeeId: 104, name: 'Pravin', Salary: 45000 },
    { employeeId: 105, name: 'Vaibhav', Salary: 65000 }
  ];
}
