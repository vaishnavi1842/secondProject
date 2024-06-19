import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdFormMachineTestComponent } from './shared/component/td-form-machine-test/td-form-machine-test.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TdFormComponent } from './shared/component/td-form/td-form.component';
import { MobileProductComponent } from './shared/component/mobile-product/mobile-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { PracticeComponent } from './shared/component/practice/practice.component';
import { MobileProductDiscordComponent } from './shared/component/mobile-product-discord/mobile-product-discord.component';


@NgModule({
  declarations: [
    AppComponent,
    TdFormMachineTestComponent,
    TdFormComponent,
    MobileProductComponent,
    PracticeComponent,
    MobileProductDiscordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
