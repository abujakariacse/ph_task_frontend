export const dateConverter = (utc) => {
  const utcDate = new Date(utc);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Dhaka",
  };

  const localDateString = utcDate.toLocaleString("en-US", options);
  return localDateString;
};
