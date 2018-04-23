import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';

@Injectable()
export class StudentGeneratorService {
  constructor() { }
  getCharacters(): any[] {
    return CHARACTERS;
  }
  getColumns(): string[] {
    return ['name', 'surname', 'psi', 'psi weight', 'iwa', 'iwa weight', 'avg'];
  }
}
