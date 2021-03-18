import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, name: "userone", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "userthree", balance: 7000, password: "user3" },
    1003: { accno: 1003, name: "userfour", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "userfive", balance: 61000, password: "user5" },
  }

  constructor() { }
  register(accno:any,password:any)
  {
    if(accno in this.accountDetails)
    {
      console.log("user exist log in");
      alert("please login")
      return 0;
      
    }
    
      this.accountDetails[accno]={accno,name:"new",balance:0,password}
      console.log(this.accountDetails);
      return 1;

      
    
    
  }
}
