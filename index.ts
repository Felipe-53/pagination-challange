export class PaginationError extends Error {}

// Should return at most `maxDisplayedPages` pages;
// From the current page, it should return one page before the rest after it, when possible;
// Resolve cases where the above is not possible;

export function getDisplayablePagesOptions(
  maxDisplayedPages: number,
  numberOfPages: number,
  currentPage: number
): number[] {
  // TODO: Implement this function
  return [];
}
