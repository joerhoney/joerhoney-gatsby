const concatQuery = (array) => {
  if (array.length > 0) {
    return "?" + array.join("&");
  }
};
export default concatQuery;
