import readInput from "../read_input";

type OppPlay = "A" | "B" | "C";
type MyPlay = "X" | "Y" | "Z";
type PlayName = "rock" | "paper" | "scissors";
type Outcome = "win" | "lose" | "draw";
interface Round {
  me: PlayName;
  opponent: PlayName;
}

const PLAY_SCORE: Record<PlayName, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const OUTCOME_SCORE: Record<Outcome, number> = {
  lose: 0,
  draw: 3,
  win: 6,
};

const SHORTHAND_DICT: Record<OppPlay | MyPlay, PlayName> = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

export const getInput = (name: "test" | "real") =>
  readInput(name, 2).split("\n");

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
