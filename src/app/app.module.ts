import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffDirectoryComponent } from './staff-directory/staff-directory.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { DisabledStaffComponent } from './disabled-staff/disabled-staff.component';
import { DepartmentComponent } from './department/department.component';
import { PayrollComponent } from './payroll/payroll.component';

const appRoutes: Routes = [
  { path: 'StaffDirectory', component: StaffDirectoryComponent },
  {path: 'Department' ,  component: DepartmentComponent},
  {path:'StaffAttendance' , component: StaffAttendanceComponent},
  {path:'DisabledStaff' , component: DisabledStaffComponent},
  {path:'Payroll' , component:PayrollComponent},
  { path: '',   redirectTo: '/StaffDirectory', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StaffDirectoryComponent,
    PageNotFoundComponent,
    StaffAttendanceComponent,
    DisabledStaffComponent,
    DepartmentComponent,
    PayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
