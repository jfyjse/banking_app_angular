import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails: any = {
    1000: { accno: 1000, name: "userone", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "userthree", balance: 7000, password: "user3" },
    1003: { accno: 1003, name: "userfour", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "userfive", balance: 61000, password: "user5" },
  }
  accno= "enter acco";
  pswd = "";
  aim = "pewer"

  constructor(private router:Router) { }

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
    var data = this.accountDetails;

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
