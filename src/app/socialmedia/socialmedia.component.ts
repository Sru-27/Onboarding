import { Component, OnInit } from '@angular/core';
import { media } from './media';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  age = ['10-20','20-30','30-40','40-50','50-60'];
  marketing = ['Email marketing','Telemarketing','B2B marketing','B2C marketing'];

  constructor() {

  }

  ngOnInit(): void {

  }

  model: any = {};


}
