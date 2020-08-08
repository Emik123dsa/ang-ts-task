import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { FooterModule } from "./components/footer";
import { HeaderModule } from "./components/header";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, FooterModule, HeaderModule],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }


