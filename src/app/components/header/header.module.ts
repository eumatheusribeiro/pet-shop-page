import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
