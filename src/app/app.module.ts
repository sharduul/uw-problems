import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TaskListComponent },
  { path: '**', redirectTo: '/list'}
]


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
