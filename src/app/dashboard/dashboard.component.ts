import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depForm=this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required, Validators.maxLength(8), Validators.pattern('[0-9]*')]]
    
  })

  withForm=this.fb.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required, Validators.maxLength(8), Validators.pattern('[0-9]*')]]
    
  })
  name:any;
  balance:any;

  constructor( private fb:FormBuilder,  public dataser:DataService) { 
   this.name= localStorage.getItem("name")
    this.balance= localStorage.getItem("balance")
  }

  ngOnInit(): void {
  }

  deposit()
  {
    if(this.depForm.valid){
      this.dataser.deposit(this.depForm.value.accno,this.depForm.value.pwd,this.depForm.value.amt).subscribe((dat:any)=>
      {
        if(dat)
        {
          alert(dat.message);
        }
      },(dat)=>{
        alert(dat.error.message)
      })

    }
    else
    {
      alert("invalid frms")
    }
  }

  withdraw()
  {
    if(this.withForm.valid){
      this.dataser.withdraw(this.withForm.value.accno,this.withForm.value.pwd,this.withForm.value.amt).subscribe((dt:any)=>{
        if(dt){
          alert(dt.message)
        }
      },(dt)=>{
        alert(dt.error.message)
      })

    }
    else
    {
      alert("invalid frms")
    }

  }

}
