import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './Employee';

@Injectable()
export class DataService {
    private url = "api/employee";

    constructor(private http: HttpClient) {
    }
 
    getEmployees(name:string, departmet: string, birthday: string, startwork: string,salary: number, sortOrder:string ) {
        return this.http.get(this.url+'?name='+ name + '&departmet=' + departmet + '&birthday='+ birthday +'&startwork='+ startwork +'&salary='+ salary +'&sortOrder='+ sortOrder);
    }
 
    getEmployee(id: number) {
        return this.http.get(this.url + '/' + id);
    }
 
    createEmployee(employee: Employee) {
        return this.http.post(this.url, employee);
    }
 
    updateEmployee(employee: Employee) {
        return this.http.put(this.url, employee);
    }
 
    deleteEmployee(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}