import { getPriority, PRIORITIES } from "./part_1";

type Group = [string, string, string];

export const getGroups = (
  [one, two, three, ...rest]: string[],
  acc: Group[] = []
): Group[] => {
  acc.push([one, two, three]);
  if (rest.length === 0) return acc;
  return getGroups(rest, acc);
};

const isRepeatedItem = (
  [item, ...rest]: string[],
  two: string,
  three: string
) => {
  if (two.includes(item) && three.includes(item)) return item;
  if (rest.length === 0) throw new Error("repeated item not found!");
  return isRepeatedItem(rest, two, three);
};

export const getRepeatedGroupItem = ([one, two, three]: Group): string =>
  isRepeatedItem(one.split(""), two, three);

const getGroupPriority = (group: Group) =>
  PRIORITIES.indexOf(getRepeatedGroupItem(group)) + 1;

export const getGroupPrioritySum = (input: string[]): number =>
  getGroups(input)
    .map(getGroupPriority)
    .reduce((prev, newPriority) => prev + newPriority, 0);
