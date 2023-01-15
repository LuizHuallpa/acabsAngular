import { Component, OnInit ,AfterViewInit, ViewChild, NgModule} from '@angular/core';
import {} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface FalloutSummary {
  falloutName: string;
  code: number;
  count: number;
  
}

const ELEMENT_DATA: FalloutSummary[] = [
  { falloutName: 'Trunk group not found', code: 110, count: 20910}

];

@Component({
  selector: 'app-mockfeeds',
  templateUrl: './mockfeeds.component.html',
  styleUrls: ['./mockfeeds.component.css']
})
export class MockfeedsComponent implements OnInit {
  displayedColumns: string[] = ['falloutName', 'code', 'count'];
  dataSource = ELEMENT_DATA;
  dataSourceWithPageSize: any;


  constructor() { }


  ngOnInit(): void {
  }

}
