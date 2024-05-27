export type PlayerType = 'Human' | 'Cpu' | 'Monkey';

export interface GameSettings {
  numberOfHands: number;
  numberOfRounds: number;
  player1Type: PlayerType;
  player2Type: PlayerType;
}

export interface RoundResult {
  player1Wins: number;
  player2Wins: number;
  ties: number;
  result: string;
}
