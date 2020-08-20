import { User } from './User';

export class UsersResponse {
  pages: number;
  users: User[];

  constructor(usersResponse: UsersResponse) {
    this.pages = usersResponse.pages;
    this.users = usersResponse.users.map(user => new User(user));
  }
}
