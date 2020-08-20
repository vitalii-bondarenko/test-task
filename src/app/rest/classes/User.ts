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
