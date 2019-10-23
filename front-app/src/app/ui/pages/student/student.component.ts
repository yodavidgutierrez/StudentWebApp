import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  StudentsService} from 'src/app/infraestructure/apis/student.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuario',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  forma: FormGroup;

  constructor(private studentService: StudentsService,private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.forma = this.fb.group({
      username: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,Validators.min(1), Validators.max(50)]),
      career: new FormControl('',[Validators.required]),
    });

  }

  ngOnDestroy() {
    //this.loadingSubs.unsubscribe();
  }

  createStudent() {
    this.studentService.CreateStudent(this.forma.value)
      .subscribe( data => {
        Swal.fire({
          title: 'student successfully created!',
          type: 'success',
          confirmButtonText: 'Cool'
        }).then(()=> {
          this.router.navigate(['students']);
        })
        
      });
  }
}
