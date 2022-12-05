import readInput from "../read_input";
type ElfCalories = number[];
type Largest3Calories = [number, number, number];

const parseElf = (elf: string): ElfCalories =>
  elf.split("\n").map((cal) => parseInt(cal, 10));

const isLargestCalories = (prev: number, newCals: number) =>
  newCals > prev ? newCals : prev;

const isLargest3Calories = (
  [largest, secondLargest, thirdLargest]: Largest3Calories,
  newCals: number
): Largest3Calories => {
  if (newCals > largest) return [newCals, largest, secondLargest];
  if (newCals > secondLargest) return [largest, newCals, secondLargest];
  if (newCals > thirdLargest) return [largest, secondLargest, newCals];
  return [largest, secondLargest, thirdLargest];
};

export const getElves = (file: "test" | "real"): ElfCalories[] =>
  readInput(file, 1, "\n\n").map(parseElf);

export const sumElf = (elf: ElfCalories): number =>
  elf.reduce((acc, cals) => acc + cals);

export const findLargestElf = (elves: ElfCalories[]): number =>
  elves.map(sumElf).reduce(isLargestCalories, 0);

export const findLargest3Elves = (elves: ElfCalories[]): Largest3Calories =>
  elves.map(sumElf).reduce(isLargest3Calories, [0, 0, 0]);
