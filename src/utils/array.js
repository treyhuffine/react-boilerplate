const PER_PAGE = 20;

export const paginate = (list, page) => {
  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;

  return list.slice(start, end);
};
