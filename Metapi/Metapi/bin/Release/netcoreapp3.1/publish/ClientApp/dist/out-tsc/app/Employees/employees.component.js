import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmployeesComponent = class EmployeesComponent {
    constructor(service) {
        this.employees = [];
        service.get("api/employee")
            .subscribe(x => this.employees = x);
    }
};
EmployeesComponent = __decorate([
    Component({
        selector: 'employees',
        templateUrl: './employees.component.html',
    })
], EmployeesComponent);
export { EmployeesComponent };
//# sourceMappingURL=employees.component.js.map