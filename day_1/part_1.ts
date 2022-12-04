import fs from "fs";
type ElfCalories = number[];

const parseElf = (elf: string): ElfCalories =>
  elf.split("\n").map((cal) => parseInt(cal, 10));

const isLargestCalories = (prev: number, newCals: number) =>
  newCals > prev ? newCals : prev;

export const getElves = (file: "test" | "real"): ElfCalories[] =>
  fs
    .readFileSync(`./day_1/${file}_input.txt`, { encoding: "utf-8" })
    .split("\n\n")
    .map(parseElf);

export const sumElf = (elf: ElfCalories): number =>
  elf.reduce((acc, cals) => acc + cals);

export const findLargestElf = (elves: ElfCalories[]): number =>
  elves.map(sumElf).reduce(isLargestCalories, 0);
