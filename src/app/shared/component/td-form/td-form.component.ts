import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcontactModeArr, Istd } from '../../models/practice.interface';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('signin')signin !:NgForm
  constructor() { }

userInfo:Istd=
  {
    userdata:{username: 'ssssssss', email: 'a@gmail.com'},
    modecontact:'email',
  contact:12222122,
  secreatequestion:'favoritefood',
  answer:'pune',
  subsribed:true
}


modContact:Array<IcontactModeArr>=[
  {
   moc:'Email',
   id:1
 },
 {
  moc:'mobile',
  id:2
 }
]
  ngOnInit(): void {
  }
 
  onsubmit(){
    console.log(this.signin)
    console.log(this.signin.value)
    this.signin.reset()

  }
  
  onEdit(){
    this.signin.form.patchValue(this.userInfo)
  }

}
