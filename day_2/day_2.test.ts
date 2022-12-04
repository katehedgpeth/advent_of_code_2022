import { getRounds, getTotalScore, getInput } from "./part_1";

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
      expect(getTotalScore(rounds)).toEqual(15);
    });
    test("Real Input", () => {
      expect(getTotalScore(getRounds(getInput("real")))).toEqual(15523);
    });
  });
});
