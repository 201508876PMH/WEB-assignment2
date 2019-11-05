import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[] = [];

  constructor() { 
    
    this.images[0] = "../../../assets/img/F1.jpg";
    this.images[1] = "../../../assets/img/F2.jpg";
    this.images[2] = "../../../assets/img/F3.jpg";
  }

  ngOnInit() {
  }

  //private LOGO = require("../../../assets/img");
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  


}

 