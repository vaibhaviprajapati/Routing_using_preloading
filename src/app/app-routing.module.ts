/**
 * @author Vaibhhavi Prajapati
 * Routing using preloading
 * In preloading, its create chunk file when application is first loaded
 * Preloading provide preloadingStrategy, its load all feature module when application is start.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
     path: 'employee',
     loadChildren: './employee/employee.module#EmployeeModule'
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy : PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
