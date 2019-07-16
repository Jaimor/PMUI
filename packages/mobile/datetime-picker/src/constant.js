export default {
  typeMap: {
    date: 'date',           //year-month-day
    datetime: 'datetime',   //year-month-day hh:mm
    year: 'year',           //year
    month: 'month',         //month
    year_month: 'year-month',//year-month
    time: 'time'            //hh:mm
  },
  years: () => {
    return this.util.years([new Date().getFullYear() - 10, new Date().getFullYear() + 10]);
  },
  months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
  util: {
    years(yearArr) {
      const years = {values:[]};
      for(let i = yearArr[0], len = yearArr[1]; i <= len; i++) years.values.push(i);
      return years;
    }
  }
}