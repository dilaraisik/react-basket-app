function paginate(array, pageSize, pageNumber) {
  return array.slice(
    pageNumber * pageSize,
    pageNumber * pageSize + pageSize
  );
}

function calculatePageCount(pageSize, totalCount) {
  return (totalCount < pageSize) ? 1 : Math.floor(totalCount / pageSize);
}

export {
  paginate,
  calculatePageCount
}