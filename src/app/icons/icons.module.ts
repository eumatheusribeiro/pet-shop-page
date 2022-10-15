import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCat);
  }
}
