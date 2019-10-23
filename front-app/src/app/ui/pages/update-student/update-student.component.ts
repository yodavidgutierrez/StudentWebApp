import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/studentDTO';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentsService } from 'src/app/infraestructure/apis/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studnet: Student[];
  editForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private studentService: StudentsService) { }
  userId:any;
  ngOnInit() {
    this.userId = window.localStorage.getItem("editStudentId");
    if(!this.userId) {
      alert("Invalid action.")
      this.router.navigate(['students']);
      return;
  }

  this.editForm = this.fb.group({
    id: [''],
    username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', [Validators.required,Validators.min(1), Validators.max(50)]],
    career: ['', Validators.required]
  });
  this.studentService.getStudent(+this.userId)
  .subscribe( data => {
    this.editForm.setValue(data);
  });
}

onSubmit() {
  this.studentService.updateStudent(this.editForm.value,this.userId)
    .subscribe(data => {
      Swal.fire({
        title: 'student successfully updated!',
        type: 'success',
        confirmButtonText: 'Cool'
      }).then(()=> {
        this.router.navigate(['students']);
      })
      })
    }
  }
