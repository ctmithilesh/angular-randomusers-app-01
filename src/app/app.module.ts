import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomUsersComponent } from './Components/random-users/random-users.component';
import { HelloComponent } from './Components/hello/hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { FakeTodosComponent } from './Components/fake-todos/fake-todos.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomUsersComponent,
    HelloComponent,
    AboutComponent,
    FakeTodosComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
