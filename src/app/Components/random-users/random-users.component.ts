import { Component, OnInit } from '@angular/core';
import { RandomUsersServiceService } from 'src/app/Services/random-users-service.service';
@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.css']
})
export class RandomUsersComponent implements OnInit {
  users: any;
  constructor(private RUsersService: RandomUsersServiceService) { }

  ngOnInit(): void {
    
      this.RUsersService.getUsers().subscribe(data =>{

          this.users = data['results']

      })

  }

}


