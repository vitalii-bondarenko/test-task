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
