import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotesComponent} from "./notes/notes.component";
import {NoteEditComponent} from "./notes/note-edit/note-edit.component";

const appRoutes: Routes = [
  {path: "", component: NotesComponent},
  {path: ":id", component: NoteEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
