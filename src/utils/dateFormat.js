const dateFormat = (datestring) => {
  let date = new Date(datestring);
  let format =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  return format;
};

export default dateFormat;
