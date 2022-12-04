import readInput from "../read_input";
import { getCompartments, getPrioritySum, getRepeatedItem } from "./part_1";
import { getGroupPrioritySum, getGroups, getRepeatedGroupItem } from "./part_2";

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
  describe(`Part 2
  Find the item type that corresponds to the badges of each three-Elf group.
  What is the sum of the priorities of those item types?`, () => {
    test("getGroups", () => {
      const [one, two, three, four, five, six] = testInput;
      expect(getGroups(testInput)).toEqual([
        [one, two, three],
        [four, five, six],
      ]);
    });
    test("getRepeatedItem", () => {
      const groups = getGroups(testInput);
      expect(groups.map(getRepeatedGroupItem)).toEqual(["r", "Z"]);
    });
    test("Test Input", () => {
      expect(getGroupPrioritySum(testInput)).toBe(70);
    });
    test("Real Input", () => {
      expect(getGroupPrioritySum(realInput)).toBe(2604);
    });
  });
});
