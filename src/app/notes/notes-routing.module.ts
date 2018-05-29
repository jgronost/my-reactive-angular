import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotesComponent} from "./notes.component";
import {NoteEditComponent} from "./note-edit/note-edit.component";
import {NoteDetailComponent} from "./note-detail/note-detail.component";

const notesRoutes: Routes = [
  {path: "", component: NotesComponent, children: [
      // {path: "", component: NoteStartComponent},
      {path: "new", component: NoteEditComponent},
      {path: ":id", component: NoteDetailComponent},
      {path: ":id/edit", component: NoteEditComponent}
    ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: "", component: NotesComponent, children: [
            // {path: "", component: NoteStartComponent},
            {path: "new", component: NoteEditComponent},
            {path: ":id", component: NoteDetailComponent},
            {path: ":id/edit", component: NoteEditComponent}
          ]
        }
      ]
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
