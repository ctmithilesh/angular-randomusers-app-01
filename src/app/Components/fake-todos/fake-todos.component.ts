import { Component, OnInit } from '@angular/core';
import { FakeTodoService } from 'src/app/Services/fake-todo.service';

@Component({
  selector: 'app-fake-todos',
  templateUrl: './fake-todos.component.html',
  styleUrls: ['./fake-todos.component.css']
})
export class FakeTodosComponent implements OnInit {

  data: any;
  constructor(private FakeTodoService: FakeTodoService) {



   }

  ngOnInit(): void {

      this.FakeTodoService.getFakeTodos().subscribe(data =>{
            console.log(data)
            this.data = data
           
    })

  }

}
