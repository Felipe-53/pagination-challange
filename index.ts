export class PaginationError extends Error {}

// Should return at most `maxDisplayedPages` pages;
// From the current page, it should return one page before the rest after it, when possible;
// Resolve cases where the above is not possible;

export function getDisplayablePagesOptions(
  maxDisplayedPages: number,
  numberOfPages: number,
  currentPage: number
): number[] {
  let pages: number[] = [];

  if (numberOfPages <= maxDisplayedPages) {
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  let pagesBehindCurrentPage = 1;
  let pagesAheadCurrentPage =
    maxDisplayedPages -
    (pagesBehindCurrentPage + 1); /* 1 refers to the current page */

  if (1 + pagesBehindCurrentPage > numberOfPages) {
    throw new PaginationError("Invalid number of pages");
  }

  while (currentPage - pagesBehindCurrentPage < 1) {
    pagesBehindCurrentPage--;
    pagesAheadCurrentPage++;
  }

  while (currentPage + pagesAheadCurrentPage > numberOfPages) {
    pagesBehindCurrentPage++;
    pagesAheadCurrentPage--;
  }

  for (
    let i = currentPage - pagesBehindCurrentPage;
    i <= currentPage + pagesAheadCurrentPage;
    i++
  ) {
    pages.push(i);
  }

  return pages;
}
