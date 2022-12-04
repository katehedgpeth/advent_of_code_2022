import fs from "fs";

const readInput = (name: "test" | "real", day: number): string =>
  fs.readFileSync(`./day_${day}/${name}_input.txt`, { encoding: "utf-8" });

export default readInput;
