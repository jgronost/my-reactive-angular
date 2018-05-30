import { Injectable } from "@angular/core";
import {Note} from "./note";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NotesService {
  private notesList = [ new Note("The very first note"),
    new Note("Yet another note"),
    new Note("And the next one, like third or so"),
    new Note("I stop counting them")];

  notesChanged = new BehaviorSubject<Note[]>(this.notesList);

  public readonly notes: Observable<Note[]> = this.notesChanged.asObservable();

  getNote(index: number): Note {
     return this.notesList[index];
  }

  addNote(note: Note) {
     this.notesList.push(note);
     this.notesChanged.next(this.notesList.slice());
  }

  updateNote(note: Note, index: number) {
     this.notesList[index] = note;
     this.notesChanged.next(this.notesList.slice());
  }

  deleteNote(index: number) {
    this.notesList.splice(index, 1);
    this.notesChanged.next(this.notesList.slice());
  }

}
