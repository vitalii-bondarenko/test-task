import { Component, OnInit } from '@angular/core';
import { BreadcrumbData } from '../../components/breadcrumb/breadcrumb.component';
import { User, UsersService } from '../../rest/users/users.service';

export class Pagination {
  page = 1;
  limit = 16;
  totalPages: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  pagination = new Pagination();
  breadcrumbData: BreadcrumbData[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    this.initBreadCrumb();
  }

  initBreadCrumb(): void {
    this.breadcrumbData = [
      {
        displayName: 'Main page',
        route: '/'
      },
      {
        displayName: 'User statistics'
      },
    ];
  }

  changePage(page: number): void {
    this.pagination.page = page;
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers(this.pagination).subscribe(usersResponse => {
      this.users = usersResponse.users;
      this.pagination.totalPages = usersResponse.pages;
    });
  }
}
