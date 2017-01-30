import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Jobs} from '../jobs';

@Component({
  selector: 'app-sk-job-list',
  templateUrl: './sk-job-list.component.html',
  styleUrls: ['./sk-job-list.component.css']
})
export class SkJobListComponent implements OnInit {
	jobs: Jobs[] = [];
	dummyjob = new Jobs('dummy','dummy','dummy');
	@Output() clickJob = new EventEmitter<Jobs>();
	jobClick(dummyjob: Jobs){
		this.clickJob.emit(dummyjob);

	}


  constructor() { }

  ngOnInit() {
  }

}
