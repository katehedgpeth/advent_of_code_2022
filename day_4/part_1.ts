type Range = Set<number>;

export const buildRange = (
  [prevNum, ...rest]: number[],
  rangeEnd: number
): number[] => {
  if (prevNum === rangeEnd) return [prevNum, ...rest];
  const nextNum = prevNum + 1;
  const range = [nextNum, prevNum, ...rest];
  if (nextNum === rangeEnd) return range;
  return buildRange(range, rangeEnd);
};

export const parseRange = ([start, end]: [number, number]) => {
  return buildRange([start], end);
};

const splitPairs = (pair: string) => pair.split(",") as [string, string];
const parseRangeStartEnd = (rangeString: string) =>
  rangeString.split("-").map((i) => parseInt(i, 10)) as [number, number];

const parsePairRanges = ([one, two]: [string, string]) =>
  [one, two].map(parseRangeStartEnd).map(parseRange);

export const parsePairs = (input: string[]) =>
  input.map(splitPairs).map(parsePairRanges) as [number[], number[]][];

const rangeContainsRange = (
  [num, ...rest]: number[],
  range: Range
): boolean => {
  if (!range.has(num)) return false;
  if (rest.length === 0) return true;
  return rangeContainsRange(rest, range);
};
export const isContainedPair = ([one, two]: [number[], number[]]): boolean =>
  rangeContainsRange(one, new Set(two)) ||
  rangeContainsRange(two, new Set(one));

export const countContainedPairs = (input: string[]): number =>
  parsePairs(input)
    .map(isContainedPair)
    .reduce((count, isContained) => (isContained ? count + 1 : count), 0);
