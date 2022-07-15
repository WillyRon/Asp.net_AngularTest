import { Component, DoCheck, OnInit, } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../Employee';
import { EmployeesComponent } from '../Employees/employees.component';

@Component({
    selector: 'delete',
    templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit, DoCheck {
 
    id: number= 1;
    employee!: Employee;   
    static getEmpl: void;
 
    constructor(private dataService: DataService, private lod: EmployeesComponent) {  
    }
    ngDoCheck(): void {
        this.id= this.lod.id;
    }
    
    ngOnInit() {
        this.getEmpl();           
    }
  
    getEmpl(){
        if (this.id)
        this.dataService.getEmployee(this.id)
            .subscribe((data: Employee) => this.employee = data);
    }
 
    delete() {
        if (this.id)
        this.dataService.deleteEmployee(this.id).subscribe(data => this.lod.load());
    }
}