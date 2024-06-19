import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile.data';
import { Imobile } from '../../models/practice.interface';

@Component({
  selector: 'app-mobile-product-discord',
  templateUrl: './mobile-product-discord.component.html',
  styleUrls: ['./mobile-product-discord.component.scss']
})
export class MobileProductDiscordComponent implements OnInit {
   mobArr:Array<Imobile>=mobileProducts
  constructor() { }

  ngOnInit(): void {
  }

}
