import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Guard } from 'src/app/models/Guard';
import { GuardService } from "src/app/services/guard.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-guard",
  templateUrl: "./guard.component.html",
  styleUrls: ["./guard.component.css"],
})
export class GuardComponent implements OnInit {
  guardForm: FormGroup;
  submitted: boolean = false;
  guard: Guard = new Guard();
  genderList = [{gender:"Male"},{gender:"Female"},{gender:"Others"}];

  constructor(
    private fb: FormBuilder,
    private guardService: GuardService,
    private router:Router
  ) { }

  ngOnInit() {
    this.guardForm = this.fb.group({
      guardName: ["", Validators.required],
      phoneNumber: ["",],
      address: ["", Validators.required],
      gender: ["", Validators.required],

    });
  }

  get f() {
    return this.guardForm.controls;
  }

  saveData() {

    if (this.guardForm.invalid) {
      return;
    }
    this.guard.guardName = this.guardForm.get("guardName").value;
    this.guard.phoneNumber = this.guardForm.get("phoneNumber").value;
    this.guard.address = this.guardForm.get("address").value;
    this.guard.gender = this.guardForm.get("gender").value;

    console.log(this.guard)
    this.guardService.createGuard(this.guard).subscribe((data) => {
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success').then((result)=> {
        if(result.value) {
          this.router.navigate(['/guard-grid'])
        }
      })
      console.log(data);
    });

    this.submitted = true;

  }

  reset() { }
}
