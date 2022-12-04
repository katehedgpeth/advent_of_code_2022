import readInput from "../read_input";
import { getCompartments, getPrioritySum, getRepeatedItem } from "./part_1";

const testInput = readInput("test", 3);
const realInput = readInput("real", 3);

describe("Day 2", () => {
  describe(`Part 1
  Find the item type that appears in both compartments of each rucksack.
  What is the sum of the priorities of those item types?
`, () => {
    test("getCompartments", () => {
      expect(getCompartments("aabb")).toEqual(["aa", "bb"]);
    });
    test("getRepeatedItem", () => {
      expect(testInput.map(getRepeatedItem)).toEqual([
        "p",
        "L",
        "P",
        "v",
        "t",
        "s",
      ]);
    });
    test("Test Input", () => {
      expect(getPrioritySum(testInput)).toBe(157);
    });
    test("Real Input", () => {
      expect(getPrioritySum(realInput)).toBe(7746);
    });
  });
});
