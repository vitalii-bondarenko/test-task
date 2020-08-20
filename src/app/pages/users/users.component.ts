import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../rest/users.service';
import { User } from '../../rest/classes/User';
import { BreadcrumbData } from '../../components/breadcrumb/BreadcumdData';
import { Pagination } from '../../components/pagination/Pagination';

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
