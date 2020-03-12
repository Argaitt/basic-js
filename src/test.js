function testFunc(date) {
    let test = Object.prototype.toString.call(date)
    if (Object.prototype.toString.call(date) !== "[Object Date]") {
        throw new Error();
      }
      if (date == null) {
        return "Unable to determine the time of year!";
      }
      let month = date.getMonth();
      if (month >= 11 || month <= 1) {
          return "winter";
      }else if (month >= 2 && month <= 4) {
          return "spring";
      }else if (month >= 5 && month <= 7) {
          return "summer";
      }else if (month >= 8 && month <= 10) {
          return "fall"
      }
};

const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    }};
testFunc(deeperFakeDate);