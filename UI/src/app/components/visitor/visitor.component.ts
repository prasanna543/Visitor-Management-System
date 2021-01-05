import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Visitor } from 'src/app/models/Visitor';
import { VisitorService } from "src/app/services/visitor.service";

@Component({
  selector: "app-visitor",
  templateUrl: "./visitor.component.html",
  styleUrls: ["./visitor.component.css"],
})
export class VisitorComponent implements OnInit {
  visitorForm: FormGroup;
  submitted: boolean = false;
  visitor:Visitor = new Visitor();

  constructor(
    private fb: FormBuilder,
    private visitorService: VisitorService
  ) {}

  ngOnInit() {
    this.visitorForm = this.fb.group({
      visitorName: ["", Validators.required],
      phoneNumber: ["",],
      address: ["", Validators.required],
      gender: ["", Validators.required],
      faculty: ["", Validators.required],
      purpose: ["", Validators.required],
      inTime: ["", Validators.required],
      outTime: ["", Validators.required],
    });
  }

  get f() {
    return this.visitorForm.controls;
  }

  saveData() {

    if (this.visitorForm.invalid) {
      return;
    }
this.visitor.visitorName = this.visitorForm.get("visitorName").value;
this.visitor.phoneNumber = this.visitorForm.get("phoneNumber").value;
this.visitor.address  = this.visitorForm.get("address").value;
this.visitor.faculty = this.visitorForm.get("faculty").value;
this.visitor.gender = this.visitorForm.get("gender").value;
this.visitor.inTime = new Date(this.visitorForm.get("inTime").value);
this.visitor.outTime = new Date(this.visitorForm.get("outTime").value);
this.visitor.purpose = this.visitorForm.get("purpose").value;

console.log(this.visitor)
    this.visitorService.createVisitor(this.visitor).subscribe((data) => {
        console.log(data);
      });

    this.submitted = true;

  }

  reset() {}
}
