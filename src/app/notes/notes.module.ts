import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoteListComponent, NoteDetailComponent, NoteEditComponent, NotesComponent],
  exports: [NotesComponent]
})
export class NotesModule { }
