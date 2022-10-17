import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBaseball, faBone, faBottleWater, faCalendar, faCat, faClock, faEnvelope, faHeartPulse, faMapLocation, faPhone, faPills, faRuler, faStar, faSyringe } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCat,
      faPills,
      faHeartPulse,
      faSyringe,
      faRuler,
      faBone,
      faBaseball,
      faBottleWater,
      faStar,
      faMapLocation,
      faCalendar,
      faClock,
      faEnvelope,
      faPhone
    );
  }
}
