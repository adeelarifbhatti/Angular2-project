import { Component, OnInit } from '@angular/core';

import {Jobs} from '../jobs';

@Component({
  selector: 'app-sk-jobs',
  templateUrl: './sk-jobs.component.html',
  styleUrls: ['./sk-jobs.component.css']
})
export class SkJobsComponent implements OnInit {

	skSelectedJob: Jobs;

  constructor() { }

  ngOnInit() {
  }

}
