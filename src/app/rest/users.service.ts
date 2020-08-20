import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersResponse } from './classes/UsersResponse';
import { User } from './classes/User';
import { UserStatistics } from './classes/UserStatistics';
import { DayStatistic } from './classes/DayStatistic';
import { Pagination } from '../components/pagination/Pagination';

const PAGINATION_LIMIT = 99999;

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
