import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routes';
import { LayoutModule } from '../../components/layout/layout.module';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { UsersRestModule } from '../../rest/users.rest.module';
import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [ UsersComponent ],
  imports: [
    CommonModule,
    UsersRoutes,
    LayoutModule,
    BreadcrumbModule,
    PaginationModule,
    UsersRestModule,
    LoaderModule
  ]
})
export class UsersModule {}
