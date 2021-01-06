import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Faculty } from 'src/app/models/Faculty';
import { FacultyService } from "src/app/services/faculty.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-guard",
  templateUrl: "./faculty.component.html",
  styleUrls: ["./faculty.component.css"],
})
export class FacultyComponent implements OnInit {
  facultyForm: FormGroup;
  submitted: boolean = false;
  faculty: Faculty = new Faculty();
  genderList = [{gender:"Male"},{gender:"Female"},{gender:"Others"}];

  constructor(
    private fb: FormBuilder,
    private guardService: FacultyService,
    private router:Router
  ) { }

  ngOnInit() {
    this.facultyForm = this.fb.group({
      facultyName: ["", Validators.required],
      department: ["", Validators.required],
      email: ["", Validators.required],
      gender: ["", Validators.required],
      phoneNumber: ["",],
      address: ["", Validators.required],

    });
  }

  get f() {
    return this.facultyForm.controls;
  }

  saveData() {

    if (this.facultyForm.invalid) {
      return;
    }
    this.faculty.facultyName = this.facultyForm.get("facultyName").value;
    this.faculty.department = this.facultyForm.get("department").value;
    this.faculty.email = this.facultyForm.get("email").value;
    this.faculty.gender = this.facultyForm.get("gender").value;
    this.faculty.phoneNumber = this.facultyForm.get("phoneNumber").value;
    this.faculty.address = this.facultyForm.get("address").value;

    console.log(this.faculty)
    this.guardService.createFaculty(this.faculty).subscribe((data) => {
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success').then((result)=> {
        if(result.value) {
          this.router.navigate(['/faculty-grid'])
        }
      })
    });

    this.submitted = true;

  }

  reset() { }
}
