import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([], {
    useHash: true
  })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }


