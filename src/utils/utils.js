const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const formatCurrentWeatherDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const week = weekNames[newDate.getDay()];
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();
  return `${week}, ${month} ${day}, ${year}`
};

export const formatForecastWeatherDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const week = shortWeekNames[newDate.getDay()];
  const month = newDate.getMonth() + 1;
  return `${week}, ${month}/${day}`;
};

export const citiesOptions = [
  {label: 'New York', value: 'New York'},
  {label: 'Los Angeles', value: 'Los Angeles'},
  {label: 'Chicago', value: 'Chicago'},
  {label: 'Philadelphia', value: 'Philadelphia'},
  {label: 'San Antonio', value: 'San Antonio'},
  {label: 'San Diego', value: 'San Diego'},
  {label: 'Dallas', value: 'Dallas'},
  {label: 'San Jose', value: 'San Jose'},
  {label: 'Austin', value: 'Austin'},
  {label: 'Jacksonville', value: 'Jacksonville'},
  {label: 'Fort Worth', value: 'Fort Worth'},
  {label: 'Columbus', value: 'Columbus'},
  {label: 'San Francisco', value: 'San Francisco'},
  {label: 'Seattle', value: 'Seattle'},
  {label: 'Denver', value: 'Denver'},
  {label: 'Washington', value: 'Washington'},
  {label: 'Boston', value: 'Boston'},
  {label: 'Las Vegas', value: 'Las Vegas'},
];

export const getOptionValue = (value, data) => data.find(e => e.value === value);
