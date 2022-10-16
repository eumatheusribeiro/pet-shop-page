import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
