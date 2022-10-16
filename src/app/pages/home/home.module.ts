import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { HeaderModule } from '../../components/header/header.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
