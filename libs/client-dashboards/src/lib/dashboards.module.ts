import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppDashboardsComponent } from './components/dashboards/dashboards.component';
import { AppTableComponent } from './components/table/table.component';
import { AppDashboardsRoutingModule } from './dashboards-routing.module';

@NgModule({
  imports: [CommonModule, MatTableModule, AppDashboardsRoutingModule],
  declarations: [AppDashboardsComponent, AppTableComponent],
})
export class AppDashboardsModule {}
