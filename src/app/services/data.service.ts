import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, name: "kanappi", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "dybala", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "kuttappan", balance: 7000, password: "user3" },
    1003: { accno: 1003, name: "kuttappi", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "jinjin", balance: 61000, password: "user5" },
  }
  currentUser:any;
  currentBal:any;

  constructor() {
    this.getDetails();
   }
   
   saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
    if (this.currentBal) {
      localStorage.setItem("currentBal", JSON.stringify(this.currentBal))
    }
  }
  
  getDetails() {
    if (localStorage.getItem("accountDetails")) {
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails")|| '')
    }
    if (localStorage.getItem("currentUser")) {
      {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser")||'')
      }

    }

    if (localStorage.getItem("currentBal")) {
      {
        this.currentBal = JSON.parse(localStorage.getItem("currentBal")||'')
      }

    }

  }

  register(accno: any, password: any) {
    if (accno in this.accountDetails) {
      console.log("user exist log in");
      alert("please login")
     
      return false;

    }

    this.accountDetails[accno] = {
      accno,
      name: "new user",
      balance: 0,
      password
    }

    
    alert("reg success")
    console.log(this.accountDetails);
    this.saveDetails()
    
    return true;

  }

  login(accno:any,pwd:any){

    var data = this.accountDetails;

    if (accno in data) {
      var psw1 = data[accno].password;
      if (pwd == psw1) {
        
        console.log("login success");
        var userl= data[accno].name;
        this.currentUser=userl;
        var ballm=data[accno].balance;
        this.currentBal=ballm;
        this.saveDetails();
        
        return true;

      }
      else {
        console.log("inncorrect pswd");
        return false;

      }
    }
    else {
      console.log("no user account");
      return false;

    }
  }


deposit(accno:any,pwd:any,amt:any)
{
  var ammt = parseInt(amt)
  var data = this.accountDetails;

    if (accno in data) {
      var psw1 = data[accno].password;
      if (pwd == psw1) {
       
        console.log("login success");
        data[accno].balance+=ammt;
        this.saveDetails()
        
        
        alert("acc credited wit :"+amt+" new bal= " + data[accno].balance)        
        

      }
      else {
        console.log("inncorrect pswd");
        

      }
    }
    else {
      console.log("no user account");
      

    }
  
}

withdraw(accno:any,pwd:any,amt:any){
  var ammt = parseInt(amt)
  var data = this.accountDetails;

    if (accno in data) {
      var psw1 = data[accno].password;
      if (pwd == psw1) {
  
        console.log("login success");
        if((data[accno].balance) < ammt)
        {
          alert("no money monu")
        }
        else
        {
          data[accno].balance-=ammt;
          this.saveDetails()
          alert("acc debited wit :"+amt+" new bal= " + data[accno].balance);
        }
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
