import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import {Jobs} from '../jobs';

@Component({
  selector: 'app-sk-job-detail',
  templateUrl: './sk-job-detail.component.html',
  styleUrls: ['./sk-job-detail.component.css']
})
export class SkJobDetailComponent implements OnInit, OnChanges {

	@Input() selectedJob: Jobs;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges)
  {
  	console.log("This is From ngOnChanges, Show value changed for job", JSON.stringify(changes));
  }

}
