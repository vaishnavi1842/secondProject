import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form-machine-test',
  templateUrl: './td-form-machine-test.component.html',
  styleUrls: ['./td-form-machine-test.component.scss']
})
export class TdFormMachineTestComponent implements OnInit {
  @ViewChild('signup')signup !: NgForm
  constructor() { }
 
  userInfo={
    answer: true,
    contact: "12",
    email: "a@gmail.com",
    modecontact: "Email",
   secreatequestion:"favouratecity",
   username: "ssssssss"
  }

  

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.signup)
    console.log(this.signup.value)
    this.signup.reset()
  }
  onEdit(){
    this.signup.form.patchValue(this.userInfo)

  }
}
