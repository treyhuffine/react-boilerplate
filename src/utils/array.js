const PER_PAGE = 20;

export const paginate = (list, page, perPage = PER_PAGE) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;

  return list.slice(start, end);
};
