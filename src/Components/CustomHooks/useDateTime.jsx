const useDateTime = (timestamp) => {
  // Split the timestamp into date and time components
  const [dateStr, timeStr] = timestamp.split(' at ');
  const [monthDayYear, time] = dateStr.split(', ');

  // Convert monthDayYear into a Date object
  const [month, day, year] = monthDayYear.split(' ');
  const date = new Date(`${month} ${day}, ${year} ${time} UTC`);

  // Adjust for the time zone offset
  const offsetHours = 5 + 5.5; // UTC+5:30 offset in hours
  date.setHours(date.getHours() + offsetHours);

  return date.toLocaleString();
};

