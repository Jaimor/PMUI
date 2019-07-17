import PickerConstant from '../../picker/src/constant.js';
const Constant = {
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
  days: [
    '01','02','03','04','05','06','07','08','09','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30',
    '31'],
  hours: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
  minutes: [
    '00','01','02','03','04','05','06','07','08','09',
    '10','11','12','13','14','15','16','17','18','19',
    '20','21','22','23','24','25','26','27','28','29',
    '30','31','32','33','34','35','36','37','38','39',
    '40','41','42','43','44','45','46','47','48','49',
    '50','51','52','53','54','55','56','57','58','59'
  ],
  util: {
    years(yearArr) {
      const years = {values:[]};
      for(let i = yearArr[0], len = yearArr[1]; i <= len; i++) years.values.push(`${i}`);
      return years;
    },
    isLeapYear(year) {  //2月 平年28天、闰年29天。true:闰年
      year = Number(year);
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getCurrentMonthDays(year, month) {
      const days = {values: []};
      switch(month) {
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
          days.values = Constant.days;
          break;
        case '02':
          const isLeapYear = Constant.util.isLeapYear(year);
          if (isLeapYear) {
            days.values = Constant.days.slice(0, 29);
          } else {
            days.values = Constant.days.slice(0, 28);
          }
          break;
        case '04':
        case '06':
        case '09':
        case '11':
          days.values = Constant.days.slice(0, 30);
          break;
      }
      return days;
    },
    setTop(columnComponent, year, month, dayIndex, values, i) {
      if (dayIndex >= 28) {
        let flag = false;
        if ("04,06,09,11".indexOf(month) > -1 && dayIndex === 30) {
          columnComponent.modifyTop(columnComponent.top + PickerConstant.selectedHeight);
          flag = true;
        }
        if ("02" === month) {
          const isLeapYear = Constant.util.isLeapYear(year);
          if (isLeapYear && dayIndex >= 29) {
            columnComponent.modifyTop(columnComponent.top + PickerConstant.selectedHeight * (dayIndex - 28));
            flag = true;
          } else {
            columnComponent.modifyTop(columnComponent.top + PickerConstant.selectedHeight * (dayIndex - 27));
            flag = true;
          }
        }
        if (flag) {
          let selectedIndex = -(columnComponent.top - PickerConstant.selectedHeight * 2) / PickerConstant.selectedHeight;
          values[i] = selectedIndex === 0 ? +0 : selectedIndex;
        }
      }
    }
  }
};

export default Constant;
