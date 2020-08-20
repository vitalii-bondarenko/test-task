import { Component, Input, OnInit } from '@angular/core';

export interface BreadcrumbData {
  displayName: string;
  route?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [ './breadcrumb.component.scss' ]
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  data: BreadcrumbData[] = [];

  currentPage: BreadcrumbData;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = this.data.pop();
  }

}
