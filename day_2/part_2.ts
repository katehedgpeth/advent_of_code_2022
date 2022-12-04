import {
  OPPONENT_MOVE_SHORTHAND_DICT,
  MyPlay as NeededOutcome,
  Outcome,
  PlayName,
  PLAY_SCORE,
  OUTCOME_SCORE,
} from "./part_1";

interface Round {
  oppPlay: PlayName;
  neededOutcome: Outcome;
}

const NEEDED_OUTCOME_DICT: Record<NeededOutcome, Outcome> = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const NEEDED_PLAY_DICT: Record<PlayName, Record<"win" | "lose", PlayName>> = {
  paper: { win: "scissors", lose: "rock" },
  rock: { win: "paper", lose: "scissors" },
  scissors: { win: "rock", lose: "paper" },
};

const getNeededPlay = ({ oppPlay, neededOutcome }: Round) => {
  if (neededOutcome === "draw") return oppPlay;
  return NEEDED_PLAY_DICT[oppPlay][neededOutcome];
};

const getRoundScore = (round: Round): number => {
  const neededPlay = getNeededPlay(round);
  return PLAY_SCORE[neededPlay] + OUTCOME_SCORE[round.neededOutcome];
};

const getRounds = (input: string[]): Round[] =>
  input.map((round) => {
    const [abc, xyz] = round.split(" ");
    return {
      oppPlay: OPPONENT_MOVE_SHORTHAND_DICT[abc],
      neededOutcome: NEEDED_OUTCOME_DICT[xyz],
    };
  });

export const getTotalScore = (input: string[]): number => {
  return getRounds(input)
    .map(getRoundScore)
    .reduce((prev, newScore) => prev + newScore, 0);
};
