export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatYear = (isoString) => {
  const date = new Date(isoString);
  return date.getFullYear();
};
