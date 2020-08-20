import { DayStatistic } from './DayStatistic';
import { LineChartData } from '../../components/line-chart/LineChartData';

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
