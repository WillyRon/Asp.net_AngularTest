
import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { Employee } from "../Employee";
import { EmployeesComponent } from "../Employees/employees.component";

@Component({
    selector: 'create',
    templateUrl: './create.component.html', 
})
export class CreateComponent{
    employee: Employee = new Employee();
    constructor(private dataService: DataService,private lod: EmployeesComponent) { }
    save() {
        this.dataService.createEmployee(this.employee).subscribe(data => this.lod.load());
    }
}