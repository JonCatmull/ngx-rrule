export const getDateParts = (date: Date) => {
  return isValidDate(date)
    ? {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      }
    : {};
};

export const isValidDate = (d: Date) => {
  return !isNaN(Number(d)) && d instanceof Date;
};

export const formatDate = (date: Date) => {
  return date;
  // var d = new Date(date),
  //   month = "" + (d.getMonth() + 1),
  //   day = "" + d.getDate(),
  //   year = d.getFullYear();

  // if (month.length < 2) month = "0" + month;
  // if (day.length < 2) day = "0" + day;

  // return [year, month, day].join("-");
};
