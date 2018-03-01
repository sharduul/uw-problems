import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";


@Component({
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent {
  taskList: any[];

  constructor(private router: Router,
    private modalService: NgbModal) {

  }

  ngOnInit() {
    this.taskList = [
      {
        name: "Create Angular App"
      },
      {
        name: "Test the app"
      },
      {
        name: "Deploy the app"
      }
    ]
  }

}
