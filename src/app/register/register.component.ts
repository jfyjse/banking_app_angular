import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // accno="";
  // pswwd="";
  regForm=this.formb.group
  ({
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  });

  constructor( private dataser:DataService , private router :Router , private formb :FormBuilder) { }

  ngOnInit(): void {
  }


  register()
  {
    // if(this.regForm.get('accno')?.errors)
    // {
    //   alert("inavalid unme")
    // }
    
    if(this.regForm.valid)
    {
      console.log("form vaild");
      
    }
    else
    {
      
      this.router.navigateByUrl("register");
      alert("invalid form")
      
    }
    console.log(this.regForm.value);
    var ress=this.dataser.register(this.regForm.value.accno,this.regForm.value.pwd)
    
    // console.log("registtt click");
    // var res=this.dataser.register(this.accno,this.pswwd)
    // console.log(this.accno, this.pswwd);

    if(ress)
    {
      this.router.navigateByUrl("");
    }
    else
    {
      this.router.navigateByUrl("");
    }
    
    
  }

}
