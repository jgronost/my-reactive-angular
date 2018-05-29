import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {NotesService} from "./notes/notes.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
