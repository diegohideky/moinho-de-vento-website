import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Array<object>

  constructor() { }

  ngOnInit() {
    this.images = [
      { path: '../../assets/img/img008.JPG'},
      { path: '../../assets/img/img002.JPG'},
      { path: '../../assets/img/img003.JPG'},
      { path: '../../assets/img/img004.JPG'},
      { path: '../../assets/img/img006.JPG'},
      { path: '../../assets/img/img016.JPG'},
      { path: '../../assets/img/img021.JPG'},
      { path: '../../assets/img/img019.JPG'},
      { path: '../../assets/img/img020.JPG'}
    ];
  }

}
