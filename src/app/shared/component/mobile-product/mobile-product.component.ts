import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile.data';
import { Imobile } from '../../models/practice.interface';

@Component({
  selector: 'app-mobile-product',
  templateUrl: './mobile-product.component.html',
  styleUrls: ['./mobile-product.component.scss']
})
export class MobileProductComponent implements OnInit {
  mobileArray :Array<Imobile>=mobileProducts
  constructor() { }

  ngOnInit(): void {
  }

}
