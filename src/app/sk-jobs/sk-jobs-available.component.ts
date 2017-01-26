import { Component, OnInit, Input } from '@angular/core';

import {Jobs} from '../jobs';

@Component({
  selector: 'app-sk-jobs-available',
  templateUrl: './sk-jobs-available.component.html',
  styleUrls: ['./sk-jobs-available.component.css']
})
export class SkJobsAvailableComponent implements OnInit {
	@Input() job: Jobs;
	jobId: number;

  constructor() { }

  ngOnInit() {
  }

}
