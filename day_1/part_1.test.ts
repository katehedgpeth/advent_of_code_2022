import fs from "fs";
import { findLargestElf, getElves, sumElf } from "./part_1";

const getInput = (file: "test" | "real") =>
  fs.readFileSync(`./day_1/${file}_input.txt`, { encoding: "utf-8" });

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
