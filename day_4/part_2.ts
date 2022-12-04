import { parsePairs } from "./part_1";

const rangeIncludesNumber = ([num, ...rest]: number[], range: Set<number>) => {
  if (range.has(num)) return true;
  if (rest.length === 0) return false;
  return rangeIncludesNumber(rest, range);
};

const isOverlappingPair = ([one, two]: [number[], number[]]): boolean =>
  rangeIncludesNumber(one, new Set(two)) ||
  rangeIncludesNumber(two, new Set(one));

export const countOverlappingPairs = (input: string[]): number =>
  parsePairs(input)
    .map(isOverlappingPair)
    .reduce((count, isOverlapping) => (isOverlapping ? count + 1 : count), 0);
