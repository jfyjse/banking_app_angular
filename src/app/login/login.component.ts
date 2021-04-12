import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accno = "enter acco";
  pswd = "";
  aim = "pewer"
  loginForm = this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private router: Router, private dataservice: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // getAccno(event: any) {
  //   this.accnoo = event.target.value;

  // }
  // getPswd(event: any) {
  //   this.pswd = event.target.value;

  // }

  login() {



    if (this.loginForm.valid) {
      console.log("form vaild");

      // var accNuo = this.loginForm.value.accno;
      // var pwd = this.loginForm.value.pwd;
      this.dataservice.login(this.loginForm.value.accno, this.loginForm.value.pwd).subscribe((data:any)=>{
        if(data)
        {
          alert("reg succ");

          // alert(data.name + data.bal)
          localStorage.setItem("name",data.name);
          localStorage.setItem("balance",data.bal)
          this.router.navigateByUrl("dashboard");
        }
      },(data)=>{ alert(data.error.message); })

     }
    else {
      alert("invalid form")

    }
  }

}
