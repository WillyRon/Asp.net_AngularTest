import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { DataService } from '../data.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  
})
export class EmployeesComponent implements OnInit {
  id: number=1;
  name:string ="";
  departmet: string ="";
  birthday: string ="";
  startwork: string = "";
  salary: number = 0; 
  sortOrder:string = "FullNameAsc";
  employees: Employee[] = []; 
  static load: void;
  static getId: void;
  
  constructor(private dataService: DataService) { }
  getId(ID:number=0){
    this.id=ID;  
  }
  getSort(sort:string){
    this.sortOrder=sort;
  }
  ngOnInit() {
    this.load();
    
  }
   load() { 
      this.dataService.getEmployees(this.name,this.departmet, this.birthday, this.startwork, this.salary, this.sortOrder).subscribe((data:any) => this.employees = data);  
  }
 
 
}
