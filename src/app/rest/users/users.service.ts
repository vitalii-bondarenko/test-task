import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pagination } from '../../pages/users/users.component';

const PAGINATION_LIMIT = 99999;

export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  total_clicks: number;
  total_page_views: number;

  constructor(user: User) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.gender = user.gender;
    this.ip_address = user.ip_address;
    this.total_clicks = user.total_clicks;
    this.total_page_views = user.total_page_views;
  }

  get full_name(): string {
    return this.first_name + ' ' + this.last_name;
  }
}

export class DayStatistic {
  user_id: number;
  date: Date;
  page_views: number;
  clicks: number;

  constructor(dayStats: DayStatistic) {
    this.user_id = dayStats.user_id;
    this.date = dayStats.date;
    this.page_views = dayStats.page_views;
    this.clicks = dayStats.clicks;
  }
}

export class LineChartData {
  label: string;
  labels: string[] = [];
  values: number[] = [];
}

export class UserStatistics {
  daysStatistics: DayStatistic[];

  constructor(daysStats: DayStatistic[]) {
    this.daysStatistics = daysStats.map(day => new DayStatistic(day));
  }

  get clicksChartData(): LineChartData {
    const data = this.getChartByParamName('clicks');
    data.label = 'Clicks';
    return data;
  }

  get viewsChartData(): LineChartData {
    const data = this.getChartByParamName('page_views');
    data.label = 'Views';
    return data;
  }

  getChartByParamName(params: 'page_views' | 'clicks'): LineChartData {
    const chartData = new LineChartData();

    this.daysStatistics.forEach((day, index) => {
      chartData.labels.push(String(day.date));
      chartData.values.push(day[ params ]);
    });

    return chartData;
  }
}

export class UsersResponse {
  pages: number;
  users: User[];

  constructor(usersResponse: UsersResponse) {
    this.pages = usersResponse.pages;
    this.users = usersResponse.users.map(user => new User(user));
  }
}

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(pagination: Pagination): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`/users?page=${pagination.page}&limit=${pagination.limit}`)
      .pipe(
        map(data => new UsersResponse(data))
      );
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<UsersResponse>(`/users?page=1&limit=${PAGINATION_LIMIT}`)
      .pipe(
        map(data => new User(data.users[ userId - 1 ]))
      );
  }

  getUserStatistics(userId: number): Observable<UserStatistics> {
    return this.http.get<{ data: DayStatistic[] }>(`/statistics/${userId}`)
      .pipe(
        map(response => new UserStatistics(response.data.sort((a, b) => a.date > b.date ? 1 : -1)))
      );
  }
}
