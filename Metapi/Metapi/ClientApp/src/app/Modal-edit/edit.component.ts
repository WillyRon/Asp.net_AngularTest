import { Component, DoCheck, OnInit, } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../Employee';
import { EmployeesComponent } from '../Employees/employees.component';

@Component({
    selector: 'edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, DoCheck {
 
    id: number= 1;
    employee!: Employee;   
    static getEmp: void;
 
    constructor(private dataService: DataService, private lod: EmployeesComponent) {  
    }
    ngDoCheck(): void {
        this.id= this.lod.id;
    }
    
    ngOnInit() {
        this.getEmp();           
    }
  
    getEmp(){
        if (this.id)
        this.dataService.getEmployee(this.id)
            .subscribe((data: Employee) => this.employee = data);
    }
 
    save() {
        this.dataService.updateEmployee(this.employee).subscribe(data => this.lod.load());
    }
}