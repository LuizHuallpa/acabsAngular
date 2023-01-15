import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { NgChartsModule } from 'ng2-charts';
import { FalloutSummaryComponent } from './charts/fallout-summary/fallout-summary.component';
import { AlarmsComponent } from './charts/alarms/alarms.component';
import { FalloutsComponent } from './tables/fallouts/fallouts.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MockfeedsComponent } from './mockfeeds/mockfeeds.component';
import { CdgUsageComponent } from './mini-cards/cdg-usage/cdg-usage.component';
import { AcmUsageComponent } from './mini-cards/acm-usage/acm-usage.component';
import { LecAlarmsComponent } from './mini-cards/lec-alarms/lec-alarms.component';
import { CgOrderComponent } from './mini-cards/cg-order/cg-order.component';
import { FinanceAlarmComponent } from './mini-cards/finance-alarm/finance-alarm.component';
import { CountUpModule } from 'ngx-countup';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    FalloutSummaryComponent,
    AlarmsComponent,
    FalloutsComponent,
    MockfeedsComponent,
    CdgUsageComponent,
    AcmUsageComponent,
    LecAlarmsComponent,
    CgOrderComponent,
    FinanceAlarmComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    CountUpModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
