import { Injectable } from "@angular/core";
import {Note} from "./note";
import {Subject} from "rxjs/Subject";

@Injectable()
export class NotesService {
  private notes = [ new Note("The very first note"),
    new Note("Yet another note"),
    new Note("And the next one, like third or so"),
    new Note("I stop counting them")];

  notesChanged = new Subject<Note[]>();

  getNotes(): Note[] {
    return this.notes.slice();
  }

  getNote(index: number): Note {
     return this.notes[index];
  }

  addNote(note: Note) {
     this.notes.push(note);
     this.notesChanged.next(this.notes.slice());
  }

  updateNote(note: Note, index: number) {
     this.notes[index] = note;
     this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }

}
