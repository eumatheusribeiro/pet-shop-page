import { Component, OnInit } from '@angular/core';
import { openAndClose } from 'src/app/animations/open-and-close';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [openAndClose]
})
export class HeaderComponent implements OnInit {
  isActive = 'closed'

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isActive = this.isActive == 'closed' ? 'open' : 'closed'
  }

}
