import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NoteEditComponent } from "./note-edit/note-edit.component";
import { NotesComponent } from "./notes.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NotesRoutingModule} from "./notes-routing.module";
import {NoteItemComponent} from "./note-list/note-item/note-item.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule
  ],
  declarations: [
    NoteListComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NotesComponent,
    NoteItemComponent],
  exports: []
})
export class NotesModule { }
