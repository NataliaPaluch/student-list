import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
names: string[];
surnames: string[];

  constructor() {
    this.names = ['Anna', 'Tomasz', 'Jan'];
    this.surnames = ['Dąbrowska', 'Nowak', 'Kowalski'];
  }

  ngOnInit() {
  }

}
