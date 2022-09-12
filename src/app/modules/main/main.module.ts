import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TopBarComponent } from './inner-items/top-bar/top-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MainComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class MainModule { }
