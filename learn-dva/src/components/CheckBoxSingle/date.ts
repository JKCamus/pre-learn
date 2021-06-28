import moment from 'moment';

export enum timeRange {
  today = 'day',
  yesterday = 'days',
  recentWeek = 'weeks',
  recentMonths = 'months',
  recentQuarters = 'quarters',
  recentYear = 'years',
}

const toDate = (type: timeRange, format = 'YYYY-MM-DD HH:mm:ss'): string | string[] => {
  const end = moment().format(format);
  const start = moment().subtract(1, type).format(format);
  if (type === timeRange.today) {
    return end;
  } else if (type === timeRange.yesterday) {
    return start;
  } else {
    return [start, end];
  }
};

export default toDate;
