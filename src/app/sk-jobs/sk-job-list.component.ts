import { Component, OnInit } from '@angular/core';

import {Jobs} from '../jobs';
import {SkJobsAvailableComponent} from './sk-jobs-available.component';

@Component({
  selector: 'app-sk-job-list',
  templateUrl: './sk-job-list.component.html',
  styleUrls: ['./sk-job-list.component.css']
})
export class SkJobListComponent implements OnInit {
	jobs: Jobs[] = [];
	dummyjob = new Jobs('dummy','dummy','dummy');


  constructor() { }

  ngOnInit() {
  }

}
