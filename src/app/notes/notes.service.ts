import { Injectable } from "@angular/core";
import {Note} from "./note";
import {not} from 'rxjs/util/not';

@Injectable()
export class NotesService {

  private notes = [ new Note("The very first note"),
    new Note("Yet another note"),
  new Note("And the next one, like third or so"),
  new Note("I stop counting them")];

   getNotes(): Note[] {
    return this.notes.slice();
  }

  getNote(index: number): Note {
     return this.notes[index];
  }

  addNote(note: Note) {
     this.notes.push(note);
  }

  updateNote(note: Note, index: number) {
     this.notes[index] = note;
  }

}
