const isExternal = (path) => {
  return path.indexOf("://") > -1;
};
export default isExternal;
