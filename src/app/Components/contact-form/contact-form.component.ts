import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  formStatus: String = 'Form is not submitted!'
  city: String = 'Mumbai'
  toggle: Boolean = false


  constructor() { }

  ngOnInit(): void {

    // setTimeout(() => {
    //     this.toggle = false
    // }, 3000);
  }

  onSubmitForm(){

    this.formStatus = 'Form was submitted!'

  }

}
