import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, name: "kanappi", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "jinjin", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "himajal", balance: 7000, password: "user3" },
    1003: { accno: 1003, name: "oiuhinj", balance: 8000, password: "user4" },
    1004: { accno: 1004, name: "fiverr", balance: 61000, password: "user5" },
  }
  currentUser:any;

  constructor() {
    // this.getDetails();
   }

  // saveDetails()
  // {
  //   localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  //   localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  // }

  // getDetails()
  // {
  //   this.accountDetails= localStorage.getItem("accountDetails")
  //   this.currentUser= localStorage.getItem("currentUser")
  // }
  register(accno: any, password: any) {
    if (accno in this.accountDetails) {
      console.log("user exist log in");
      alert("please login")
      return false;

    }

    this.accountDetails[accno] = {
      accno,
      name: "new",
      balance: 0,
      password
    }
    // this.saveDetails()
    alert("reg success")
    console.log(this.accountDetails);
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
        // this.saveDetails();
        
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
        // this.saveDetails();
        console.log("login success");
        data[accno].balance+=ammt;
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
        // this.saveDetails();
        console.log("login success");
        if((data[accno].balance) < ammt)
        {
          alert("no money monu")
        }
        else
        {
          data[accno].balance-=ammt;
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
