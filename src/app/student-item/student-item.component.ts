import { Component, OnInit } from '@angular/core';
import { StudentGeneratorService } from '../student-generator.service';
import {Character} from '../models/character';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],

})
export class StudentItemComponent implements OnInit {
 name: string;
  characters: Character[];
  columns: string[];
  constructor(private atService: StudentGeneratorService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    // ["name", "surname", "occupation"]
    this.characters = this.atService.getCharacters();
    // all data in mock-data.ts
  }

}
