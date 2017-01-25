import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkHeaderComponent } from './sk-header.component';
import { SkJobsComponent } from './sk-jobs/sk-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    SkHeaderComponent,
    SkJobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
