import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from '../../components/card/card.module';
import { HeaderModule } from '../../components/header/header.module';
import { IconsModule } from '../../icons/icons.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CardModule,
    CarouselModule,
    IconsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
