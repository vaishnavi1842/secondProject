import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile.data';
import { Imobile } from '../../models/practice.interface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  constructor() { }
  mobArr:Array<Imobile>=mobileProducts
  ngOnInit(): void {
  }

}
