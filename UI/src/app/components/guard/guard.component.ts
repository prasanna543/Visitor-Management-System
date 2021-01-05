import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Guard } from 'src/app/models/Guard';
import { GuardService } from "src/app/services/guard.service";

@Component({
  selector: "app-guard",
  templateUrl: "./guard.component.html",
  styleUrls: ["./guard.component.css"],
})
export class GuardComponent implements OnInit {
  guardForm: FormGroup;
  submitted: boolean = false;
  guard:Guard = new Guard();

  constructor(
    private fb: FormBuilder,
    private guardService: GuardService
  ) {}

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
this.guard.address  = this.guardForm.get("address").value;
this.guard.gender = this.guardForm.get("gender").value;

console.log(this.guard)
    this.guardService.createGuard(this.guard).subscribe((data) => {
        console.log(data);
      });

    this.submitted = true;

  }

  reset() {}
}
