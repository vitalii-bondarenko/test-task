import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../rest/users.service';
import { ActivatedRoute } from '@angular/router';
import { UserStatistics } from '../../rest/classes/UserStatistics';
import { BreadcrumbData } from '../../components/breadcrumb/BreadcumdData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {

  userStatistics: UserStatistics;
  breadcrumbData: BreadcrumbData[] = [];
  fullName: string;
  userId: number;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initUser();
    this.getUserStats();
  }

  initUser(): void {
    this.userId = this.route.snapshot.params.id;

    this.usersService.getUserById(this.userId)
      .subscribe(user => {
        this.fullName = user.full_name;

        this.initBreadcrumbs();
      });
  }

  initBreadcrumbs(): void {
    this.breadcrumbData = [
      {
        displayName: 'Main page',
        route: '/'
      },
      {
        displayName: 'User statistics',
        route: '/users'
      },
      {
        displayName: this.fullName
      }
    ];
  }

  getUserStats(): void {
    this.usersService.getUserStatistics(this.userId)
      .subscribe(userStatistics => this.userStatistics = userStatistics);
  }

}
