import readInput from "../read_input";
import { getRounds, getTotalScore as getTotalScorePart1 } from "./part_1";
import { getTotalScore as getTotalScorePart2 } from "./part_2";

const testInput = readInput("test", 2);
const realInput = readInput("real", 2);

describe("Day 2", () => {
  describe(`Part 1
  What would your total score be if everything goes exactly according to your strategy guide?`, () => {
    test("Test Input", () => {
      const rounds = getRounds(testInput);
      expect(rounds).toEqual([
        { me: "paper", opponent: "rock" },
        { me: "rock", opponent: "paper" },
        { me: "scissors", opponent: "scissors" },
      ]);
      expect(getTotalScorePart1(rounds)).toEqual(15);
    });
    test("Real Input", () => {
      expect(getTotalScorePart1(getRounds(realInput))).toEqual(15523);
    });
  });

  describe(`Part 2
          Following the Elf's instructions for the second column,
          what would your total score be if everything goes exactly according to your strategy guide?`, () => {
    test("Test Input", () => {
      expect(getTotalScorePart2(testInput)).toBe(12);
    });
    test("Real Input", () => {
      expect(getTotalScorePart2(realInput)).toBe(15702);
    });
  });
});
