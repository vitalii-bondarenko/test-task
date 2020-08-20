import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbData } from './BreadcumdData';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [ './breadcrumb.component.scss' ]
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  data: BreadcrumbData[] = [];

  currentPage: BreadcrumbData;

  ngOnInit(): void {
    this.currentPage = this.data.pop();
  }

}
