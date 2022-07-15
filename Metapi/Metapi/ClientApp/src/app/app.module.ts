import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Employees/employees.component';
import { DataService } from './data.service';
import { CreateComponent } from './Modal-create/create.component';
import { EditComponent } from './Modal-edit/edit.component'; 
import { DeleteComponent } from './Modal-delete/delete.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: 'employees', component: EmployeesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
