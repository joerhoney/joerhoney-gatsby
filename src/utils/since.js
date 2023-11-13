const since = (since) => {
  const began = new Date(since);
  const today = new Date();
  let diff = (began.getTime() - today.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return " " + Math.abs(Math.round(diff / 365.25));
};

export default since;
