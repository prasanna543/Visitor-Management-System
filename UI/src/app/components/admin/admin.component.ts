import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Admin } from 'src/app/models/Admin';
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;
  submitted: boolean = false;
  admin:Admin = new Admin();

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.adminForm = this.fb.group({
      adminName: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["",],
      address: ["", Validators.required],


    });
  }

  get f() {
    return this.adminForm.controls;
  }

  saveData() {

    if (this.adminForm.invalid) {
      return;
    }
this.admin.adminName = this.adminForm.get("adminName").value;
this.admin.gender = this.adminForm.get("gender").value;
this.admin.email = this.adminForm.get("email").value;
this.admin.phoneNumber = this.adminForm.get("phoneNumber").value;
this.admin.address  = this.adminForm.get("address").value;

console.log(this.admin)
    this.adminService.createAdmin(this.admin).subscribe((data) => {
        console.log(data);
      });

    this.submitted = true;

  }

  reset() {}
}
