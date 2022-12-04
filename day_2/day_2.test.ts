import {
  getRounds,
  getTotalScore as getTotalScorePart1,
  getInput,
} from "./part_1";
import { getTotalScore as getTotalScorePart2 } from "./part_2";

describe("Day 2", () => {
  describe(`Part 1
  What would your total score be if everything goes exactly according to your strategy guide?`, () => {
    test("Test Input", () => {
      const input = getInput("test");
      const rounds = getRounds(input);
      expect(rounds).toEqual([
        { opponent: "rock", me: "paper" },
        { opponent: "paper", me: "rock" },
        { opponent: "scissors", me: "scissors" },
      ]);
      expect(getTotalScorePart1(rounds)).toEqual(15);
    });
    test("Real Input", () => {
      expect(getTotalScorePart1(getRounds(getInput("real")))).toEqual(15523);
    });
  });

  describe(`Part 2
          Following the Elf's instructions for the second column,
          what would your total score be if everything goes exactly according to your strategy guide?`, () => {
    test("Test Input", () => {
      const input = getInput("test");
      expect(getTotalScorePart2(input)).toBe(12);
    });
    test("Real Input", () => {
      const input = getInput("real");
      expect(getTotalScorePart2(input)).toBe(15702);
    });
  });
});
