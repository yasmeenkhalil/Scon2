import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {


  title = 'owlcarouselinAngular';
  Images = ["https://image.flaticon.com/icons/svg/3112/3112942.svg", "https://image.flaticon.com/icons/svg/3017/3017701.svg"];

  SlideOptions = { items: 8, dots: true, nav: true};
  CarouselOptions = { items: 5, dots: true, nav: true ,  loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin:"30px",
     responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 8
      }
    },};
  constructor() { }

  ngOnInit(): void {
  }

}
