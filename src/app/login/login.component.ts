import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  accno= "enter acco";
  pswd = "";
  aim = "pewer"

  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
  }
  // getAccno(event: any) {
  //   this.accnoo = event.target.value;

  // }
  // getPswd(event: any) {
  //   this.pswd = event.target.value;

  // }

  login() {
    var accNuo = this.accno;
    var pwd = this.pswd;
    var data = this.dataservice.accountDetails;

    if (accNuo in data) {
      var psw1 = data[accNuo].password;
      if (pwd == psw1) {
        console.log("login success");
        this.router.navigateByUrl("dashboard")

      }
      else {
        console.log("inncorrect pswd");

      }
    }
    else {
      console.log("no user account");

    }

  }

}
