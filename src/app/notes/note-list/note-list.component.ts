import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {Note} from "../note";
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../notes.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  notes: Note[];

  constructor(private noteService: NotesService,
              private router: Router,
              private currentRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.noteService.notes.subscribe((notes: Note[]) => this.notes = notes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewNote(): Promise<boolean> {
    return this.router.navigate(["new"], {relativeTo: this.currentRoute});
  }

}
