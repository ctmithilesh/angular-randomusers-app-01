import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  city: String = 'Mumbai'
  toggle: Boolean = true


  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
        this.toggle = false
    }, 3000);
  }

}
