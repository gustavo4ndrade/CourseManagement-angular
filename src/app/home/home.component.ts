import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Courses', cols: 1, rows: 2, color: 'lightblue', link: '/courses'},
    {text: 'Classes', cols: 1, rows: 2, color: 'lightgreen', link: '/classes'},
    {text: 'Students', cols: 1, rows: 2, color: 'lightpink', link: '/students'},
    {text: 'Profesors', cols: 1, rows: 2, color: '#DDBDF1', link: '/professors'},
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
