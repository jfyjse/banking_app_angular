import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accno="";
  pswwd="";

  constructor( private dataser:DataService , private router :Router ) { }

  ngOnInit(): void {
  }


  register()
  {
    console.log("registtt click");
    var res=this.dataser.register(this.accno,this.pswwd)
    console.log(this.accno, this.pswwd);

    if(res==1)
    {
      this.router.navigateByUrl("");
    }
    else
    {
      this.router.navigateByUrl("");
    }
    
    
  }

}
