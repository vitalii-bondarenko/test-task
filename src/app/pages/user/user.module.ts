import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routes';
import { LayoutModule } from '../../components/layout/layout.module';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { UsersRestModule } from '../../rest/users.rest.module';
import { LineChartModule } from '../../components/line-chart/line-chart.module';
import { ChartsModule } from 'ng2-charts';
import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [ UserComponent ],
  imports: [
    CommonModule,
    UserRoutes,
    LayoutModule,
    BreadcrumbModule,
    UsersRestModule,
    LineChartModule,
    LoaderModule,

  ]
})
export class UserModule {}
