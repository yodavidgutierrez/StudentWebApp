import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/infraestructure/apis/student.service';
import { Student } from 'src/app/model/studentDTO';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit, OnDestroy {
  student: Student[];
  subscription: Subscription;

  constructor(private router: Router, private studentService: StudentsService) { }

  ngOnInit() {
    this.StudentsList();
  }

  StudentsList(){
    this.subscription = this.studentService.getStudents().subscribe((data:Student[]) => {
      this.student = data;
    })
  }

  deleteUser(student: Student): void {
     
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(()=>{
            this.studentService.deleteStudent(student.id)
            .subscribe( data => {
              this.student = this.student.filter(u => u !== student);
            })
          })
        }else return;
      })
    
  };

  editUser(student: Student): void {
    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['editStudent']);
  };

  addUser(): void {
    this.router.navigate(['student']);
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
