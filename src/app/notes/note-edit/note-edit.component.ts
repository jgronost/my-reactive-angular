import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NotesService} from "../notes.service";
import {Note} from "../note";

@Component({
  selector: "app-note-edit",
  templateUrl: "./note-edit.component.html",
  styleUrls: ["./note-edit.component.css"]
})
export class NoteEditComponent implements OnInit {
  id: number;
  editMode = false;
  noteForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private notesService: NotesService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });

  }

  onCancel() {
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  onSubmit() {
    const note = new Note(
      this.noteForm.value["title"],
      this.noteForm.value["content"]);

    if (this.editMode) {
      this.notesService.updateNote(this.noteForm.value, this.id);
    } else {
      this.notesService.addNote(this.noteForm.value);
    }
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  private initForm() {
    let noteTitle = "";
    let noteContent = "";

    if (this.editMode) {
      const note = this.notesService.getNote(this.id);
      noteTitle = note.title;
      noteContent = note.content;
    }

    this.noteForm = new FormGroup({
      "title": new FormControl(noteTitle, Validators.required),
      "content": new FormControl(noteContent),
    });
  }
}
