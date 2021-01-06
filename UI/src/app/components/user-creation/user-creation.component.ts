import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guard } from 'src/app/models/Guard';
import { User } from 'src/app/models/User';
import { GuardService } from 'src/app/services/guard.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  userForm: FormGroup;
  user:User = new User();
  submitted: boolean = false;
  userList:Guard[];
  userGrid:User[];
  roleList:any[] = [{roleName:"Admin"},{roleName:"Guard"}]
  constructor( private fb: FormBuilder,private userService:UserService, private guardService:GuardService) { }

  ngOnInit() {
    this.userForm = this.fb.group ({
      username:["",Validators.required],
      password:["",Validators.required],
      role:["",Validators.required]
    });

    this.guardService.getGuardList().subscribe(res=>{
      this.userList = res;
    });

    this.userGridData();
  }


  get f() {
    return this.userForm.controls;
  }

  saveData() {

    if (this.userForm.invalid) {
      return;
    }
    this.user.username = this.userForm.get("username").value;
    this.user.password = this.userForm.get("password").value;
    this.user.role = this.userForm.get('role').value;


    console.log(this.user)
    this.userService.createUser(this.user).subscribe((data) => {
      this.userForm.reset();
      this.userGridData();

      console.log(data);
    });

    this.submitted = true;

  }
  userGridData() {
    this.userService.getUserList().subscribe(results => {
      this.userGrid = results;
      console.log(this.userGrid)
    });
  }
  onDelete(object:User) {
    Swal.fire({
      title: `Are you sure want to remove ${object.username}  ?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          `Your ${object.username} record has been deleted.`,
          'success'
        )

        this.userService.deleteUser(object.userId).subscribe(result => {
          console.log(result);
          this.userGridData();
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Record is safe :)',
          'error'
        )
      }
    });
  }

}
