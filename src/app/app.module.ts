import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkHeaderComponent } from './sk-header.component';
import { SkJobsComponent } from './sk-jobs/sk-jobs.component';
import { SkJobListComponent } from './sk-jobs/sk-job-list.component';
import { SkJobsAvailableComponent } from './sk-jobs/sk-jobs-available.component';
import { SkJobDetailComponent } from './sk-jobs/sk-job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SkHeaderComponent,
    SkJobsComponent,
    SkJobListComponent,
    SkJobsAvailableComponent,
    SkJobsAvailableComponent,
    SkJobDetailComponent
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
