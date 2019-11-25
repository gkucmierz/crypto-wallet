import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER, SPACE, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Word {
  name: string;
}

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, SPACE, COMMA, SEMICOLON];
  words: Word[] = [];

  constructor() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.words.push(...value.trim().toLowerCase().split(/\s+/g).map(w => ({name: w})));
    }
    if (input) {
      input.value = '';
    }
  }

  remove(word: Word): void {
    const idx = this.words.indexOf(word);
    if (idx >= 0) {
      this.words.splice(idx, 1);
    }
  }

  ngOnInit() {
  }

}
