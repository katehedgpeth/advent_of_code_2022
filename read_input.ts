import fs from "fs";

const readInput = (
  name: "test" | "real",
  day: number,
  split: string = "\n"
): string[] =>
  fs
    .readFileSync(`./day_${day}/${name}_input.txt`, { encoding: "utf-8" })
    .split(split);


export default readInput;
