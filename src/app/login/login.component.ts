import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails = {
    1000: { accno: 1000, name: "userone", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "userthree", balance: 7000, password: "user3" },
    1003: { accno: 1003, name: "userfour", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "userfive", balance: 61000, password: "user5" },
}

  constructor() { }

  ngOnInit(): void {
  }

  login()
  {
    alert("login worka")
  }

}
