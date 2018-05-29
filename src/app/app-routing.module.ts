import { NgModule } from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  {path: "notes", loadChildren: "./notes/notes.module#NotesModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
