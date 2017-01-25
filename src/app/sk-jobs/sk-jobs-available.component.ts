import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sk-jobs-available',
  templateUrl: './sk-jobs-available.component.html',
  styleUrls: ['./sk-jobs-available.component.css']
})
export class SkJobsAvailableComponent implements OnInit {
	job;
	jobId;

  constructor() { }

  ngOnInit() {
  }

}
