import readInput from "../read_input";
import {
  buildRange,
  countContainedPairs,
  isContainedPair,
  parsePairs,
  parseRange,
} from "./part_1";

const testInput = readInput("test", 4);
const realInput = readInput("real", 4);

const expectedPairs: [number, number][][] = [
  [
    [2, 4],
    [6, 8],
  ],
  [
    [2, 3],
    [4, 5],
  ],
  [
    [5, 7],
    [7, 9],
  ],
  [
    [2, 8],
    [3, 7],
  ],
  [
    [6, 6],
    [4, 6],
  ],
  [
    [2, 6],
    [4, 8],
  ],
];

describe("Day 4", () => {
  describe(`Part 1
            In how many assignment pairs does one range fully contain the other?`, () => {
    test("buildRange", () => {
      expect(buildRange([2], 6)).toEqual([6, 5, 4, 3, 2]);
      expect(buildRange([6], 6)).toEqual([6]);
    });
    test("parseRange", () => {
      expect(parseRange(expectedPairs[0][0])).toMatchObject([4, 3, 2]);
      expect(parseRange(expectedPairs[4][0])).toMatchObject([6]);
    });
    test("parsePairs", () => {
      expect(parsePairs(testInput)).toEqual([
        [
          [4, 3, 2],
          [8, 7, 6],
        ],
        [
          [3, 2],
          [5, 4],
        ],
        [
          [7, 6, 5],
          [9, 8, 7],
        ],
        [
          [8, 7, 6, 5, 4, 3, 2],
          [7, 6, 5, 4, 3],
        ],
        [[6], [6, 5, 4]],
        [
          [6, 5, 4, 3, 2],
          [8, 7, 6, 5, 4],
        ],
      ]);
    });
    test("isOverlappingPair", () => {
      expect(parsePairs(testInput).map(isContainedPair)).toEqual([
        false,
        false,
        false,
        true,
        true,
        false,
      ]);
    });
    test("Test Input", () => {
      expect(countContainedPairs(testInput)).toBe(2);
    });
    test("Real Input", () => {
      expect(countContainedPairs(realInput)).toBe(459);
    });
  });
});
