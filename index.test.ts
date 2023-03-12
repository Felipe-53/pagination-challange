import { expect, test } from "vitest";
import { getDisplayablePagesOptions } from ".";

const numberOfPages = 10;
const MAX_DISPLAYED_PAGES = 4;
let currentPage: number;

test("Should return [4, x5x, 6, 7] when current page is 5", () => {
  currentPage = 5;

  const displayedPages = getDisplayablePagesOptions(
    MAX_DISPLAYED_PAGES,
    numberOfPages,
    currentPage
  );
  expect(displayedPages).toEqual([4, 5, 6, 7]);
});

test("Should return [x1x, 2, 3, 4] when current page is 1", () => {
  currentPage = 1;

  const displayedPages = getDisplayablePagesOptions(
    MAX_DISPLAYED_PAGES,
    numberOfPages,
    currentPage
  );
  expect(displayedPages).toEqual([1, 2, 3, 4]);
});

test("Should return [7, 8, 9, x10x] when current page is 10", () => {
  currentPage = 10;

  const displayedPages = getDisplayablePagesOptions(
    MAX_DISPLAYED_PAGES,
    numberOfPages,
    currentPage
  );
  expect(displayedPages).toEqual([7, 8, 9, 10]);
});

test("Should return [7, 8, x9x, 10] when current page is 9", () => {
  currentPage = 9;

  const displayedPages = getDisplayablePagesOptions(
    MAX_DISPLAYED_PAGES,
    numberOfPages,
    currentPage
  );
  expect(displayedPages).toEqual([7, 8, 9, 10]);
});
