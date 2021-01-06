import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  role: string = '';
  hide: boolean = true;
  constructor(private fb: FormBuilder, private loginService: UserService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    });
  }



  submitForm() {
    this.loginService.isExists(this.loginForm.get("username").value, this.loginForm.get("password").value).subscribe(res => {
      if (res) {
        this.loginForm.reset();
        this.role = res.role
        localStorage.setItem("Role", this.role)
        if(this.role == 'Guard') {
          this.router.navigate(["/visitor"])
        } else {
          this.router.navigate(["user-creation"])
        }
        

      }
      else {
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Username or password incorrect!',  
        })  
      }
    });
  }

 

}
