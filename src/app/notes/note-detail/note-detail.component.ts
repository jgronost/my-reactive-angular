import { Component, OnInit } from "@angular/core";
import {Note} from "../note";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NotesService} from "../notes.service";

@Component({
  selector: "app-note-detail",
  templateUrl: "./note-detail.component.html",
  styleUrls: ["./note-detail.component.css"]
})
export class NoteDetailComponent implements OnInit {
  note: Note;
  id: number;

  constructor(private currentRoute: ActivatedRoute,
              private router: Router,
              private notesService: NotesService) { }

  ngOnInit() {
    this.currentRoute.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];   // plus to convert to number
        this.note = this.notesService.getNote(this.id);
      });
  }

  onEditNote() {
    this.router.navigate(["edit"], {relativeTo: this.currentRoute});
  }

  onDeleteNote() {
    this.notesService.deleteNote(this.id);
    this.router.navigate(["/notes"]);
  }

}
