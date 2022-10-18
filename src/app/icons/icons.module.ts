import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faSquareInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBaseball, faBone, faBottleWater, faCalendar, faCat, faChevronUp, faClock, faClose, faEnvelope, faHeartPulse, faMapLocation, faPhone, faPills, faRuler, faSprayCanSparkles, faStar, faSyringe } from '@fortawesome/free-solid-svg-icons';



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
      faPhone,
      faSquareInstagram,
      faFacebook,
      faTwitter,
      faTiktok,
      faCopyright,
      faSprayCanSparkles,
      faChevronUp,
      faBars,
      faClose
    );
  }
}
