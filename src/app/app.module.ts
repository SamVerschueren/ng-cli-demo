import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CustomPreloader } from './custom.preloader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
