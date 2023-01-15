import { Component, OnInit } from '@angular/core';

export interface FalloutSummary {
  falloutName: string;
  code: number;
  count: number;

}

const ELEMENT_DATA: FalloutSummary[] = [
  { falloutName: 'Trunk group not found', code: 110, count: 20910}

];

@Component({
  selector: 'app-fallouts',
  templateUrl: './fallouts.component.html',
  styleUrls: ['./fallouts.component.css']
})
export class FalloutsComponent implements OnInit {
  displayedColumns: string[] = ['falloutName', 'code', 'count'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
