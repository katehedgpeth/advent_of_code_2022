import readInput from "../read_input";

export type OppPlay = "A" | "B" | "C";
export type MyPlay = "X" | "Y" | "Z";
export type PlayName = "rock" | "paper" | "scissors";
export type Outcome = "win" | "lose" | "draw";
interface Round {
  me: PlayName;
  opponent: PlayName;
}

export const PLAY_SCORE: Record<PlayName, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

export const OUTCOME_SCORE: Record<Outcome, number> = {
  lose: 0,
  draw: 3,
  win: 6,
};

export const OPPONENT_MOVE_SHORTHAND_DICT: Record<OppPlay, PlayName> = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const MY_MOVE_SHORTHAND_DICT: Record<MyPlay, PlayName> = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const SHORTHAND_DICT = {
  ...MY_MOVE_SHORTHAND_DICT,
  ...OPPONENT_MOVE_SHORTHAND_DICT,
};

const getOutcome = (round: Round): Outcome => {
  const { me, opponent } = round;
  if (me === opponent) return "draw";
  if (me === "rock" && opponent === "scissors") return "win";
  if (me === "scissors" && opponent === "rock") return "lose";
  if (me === "scissors" && opponent === "paper") return "win";
  if (me === "paper" && opponent === "scissors") return "lose";
  if (me === "paper" && opponent === "rock") return "win";
  if (me === "rock" && opponent === "paper") return "lose";
  throw new Error(`unexpected input: ${JSON.stringify(round)}`);
};

const getScore = (round: Round) => {
  const outcome = getOutcome(round);
  return OUTCOME_SCORE[outcome] + PLAY_SCORE[round.me];
};

export const getRounds = (input: string[]): Round[] =>
  input
    .map((round) => round.split(" ").map((play) => SHORTHAND_DICT[play]))
    .map(([opponent, me]) => ({ me, opponent }));

export const getTotalScore = (rounds: Round[]) =>
  rounds.map(getScore).reduce((prev, newScore) => prev + newScore, 0);
