import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

    country: String = 'Australia'
    fruits: Array<String> = [
      'Banana',
      'Chikoo',
      'Grapes',
      'Mango'
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
