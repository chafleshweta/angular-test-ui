import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './modules/components/student-form/student-form.component';
import { StudentListComponent } from './modules/components/student-list/student-list.component';

const routes: Routes = [
  { path: 'studentForm', component: StudentFormComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: '**', redirectTo: '/studentList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
