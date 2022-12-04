export const PRIORITIES = (
  "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
).split("");

export const getCompartments = (rucksack: string): [string, string] => {
  const center = rucksack.length / 2;
  return [rucksack.slice(0, center), rucksack.slice(center)];
};

const isRepeatedItem = (
  [item, ...rest]: string[],
  compartment: string
): string => {
  if (compartment.includes(item)) return item;
  if (rest.length === 0) throw new Error("repeated item not found!");
  return isRepeatedItem(rest, compartment);
};

export const getRepeatedItem = (rucksack: string): string => {
  const [left, right] = getCompartments(rucksack);
  return isRepeatedItem(left.split(""), right);
};

export const getPriority = (rucksack: string): number =>
  PRIORITIES.indexOf(getRepeatedItem(rucksack)) + 1;

export const getPrioritySum = (input: string[]): number =>
  input.map(getPriority).reduce((prev, newPriority) => prev + newPriority, 0);
