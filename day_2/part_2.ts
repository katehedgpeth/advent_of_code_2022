import {
  OPPONENT_MOVE_SHORTHAND_DICT,
  MyPlay as NeededOutcome,
  Outcome,
  PlayName,
  PLAY_SCORE,
  OUTCOME_SCORE,
} from "./part_1";

interface Round {
  neededOutcome: Outcome;
  oppPlay: PlayName;
}

const NEEDED_OUTCOME_DICT: Record<NeededOutcome, Outcome> = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const NEEDED_PLAY_DICT: Record<PlayName, Record<"win" | "lose", PlayName>> = {
  paper: { lose: "rock", win: "scissors" },
  rock: { lose: "scissors", win: "paper" },
  scissors: { lose: "paper", win: "rock" },
};

const getNeededPlay = ({ neededOutcome, oppPlay }: Round) => {
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
      neededOutcome: NEEDED_OUTCOME_DICT[xyz],
      oppPlay: OPPONENT_MOVE_SHORTHAND_DICT[abc],
    };
  });

export const getTotalScore = (input: string[]): number => {
  return getRounds(input)
    .map(getRoundScore)
    .reduce((prev, newScore) => prev + newScore, 0);
};
