import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stars = Array(10)
  depoiments = [
    {
      id: 1,
      image: '../../../assets/depoimento-1.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In culpa illo reiciendis saepe, quisquam earum ullam perspiciatis expedita veniam. Molestiae, harum repudiandae atque placeat natus rem quas distinctio eligendi in!',
      vote: 10
    },
    {
      id: 2,
      image: '../../../assets/depoimento-2.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In culpa illo reiciendis saepe.',
      vote: 10
    },
    {
      id: 3,
      image: '../../../assets/depoimento-3.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, harum repudiandae atque placeat natus rem quas distinctio eligendi in!',
      vote: 9
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
