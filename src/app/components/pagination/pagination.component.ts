import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.scss' ]
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number;

  @Input()
  totalPages: number;

  @Output()
  changePage = new EventEmitter<number>();

  shownPages = [];

  constructor() { }

  ngOnInit(): void {
    this.reRender();
  }

  reRender(): void {
    this.shownPages = [];
    let maxSize = 5;
    for (let i = 0; i < 8; i++) {
      const shownPage = this.page - 2 + i;
      if (maxSize > 0 && shownPage <= this.totalPages && shownPage > 0) {
        maxSize--;
        this.shownPages.push(shownPage);
      }

    }
  }

  change(page: number): void {
    console.log(page);
    this.page = page;
    this.changePage.emit(page);

    this.reRender();
  }

}
