import { Routes } from '@angular/router';
import { ListStudentsComponent } from '../list-students/list-students.component';
import { StudentComponent } from '../student/student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';


export const dashboardRoutes: Routes = [

    {path: 'student', component: StudentComponent},
    { path: 'students', component: ListStudentsComponent },
    { path: 'editStudent', component: UpdateStudentComponent },
   ];