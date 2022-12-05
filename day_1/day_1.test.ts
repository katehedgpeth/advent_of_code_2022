import { findLargest3Elves, findLargestElf, getElves, sumElf } from "./day_1";

describe(`Find the Elf carrying the most Calories.
      How many total Calories is that Elf carrying?`, () => {
  test("Test input", () => {
    const elves = getElves("test");
    expect(elves.length).toBe(5);
    expect(elves.map(sumElf)).toEqual([6000, 4000, 11000, 24000, 10000]);
    expect(findLargestElf(elves)).toEqual(24000);
  });

  test("Real Input", () => {
    const elves = getElves("real");
    expect(findLargestElf(elves)).toBe(68787);
  });
});

describe(`Find the top three Elves carrying the most Calories.
          How many Calories are those Elves carrying in total?`, () => {
  test("Input Input", () => {
    const elves = getElves("test");
    expect(findLargest3Elves(elves)).toEqual([24000, 11000, 10000]);
    expect(sumElf(findLargest3Elves(elves))).toEqual(45000);
  });
  test("Real Input", () => {
    const elves = getElves("real");
    expect(sumElf(findLargest3Elves(elves))).toEqual(198041);
  });
});
