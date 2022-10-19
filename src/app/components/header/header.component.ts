import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { openAndClose } from 'src/app/animations/open-and-close';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [openAndClose]
})
export class HeaderComponent implements OnInit {
  isActive = 'closed'
  activatedLink = 0

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isActive = this.isActive == 'closed' ? 'open' : 'closed'
  }

  navigateToSection(fragment: string, index: number) {
    this.activatedLink = index
    this.router.navigateByUrl('#' + fragment, {skipLocationChange: true })
  }

}
