import { iPlayer } from '../players/IPlayer.js';
import { PlayerFactory } from '../players/PlayerFactory.js';
import { GameHelper } from '../utils/gameHelper.js';

export class Game {
  private rounds: number;
  private player1: iPlayer;
  private player2: iPlayer;
  private player1Score: number = 0;
  private player2Score: number = 0;
  private ties: number = 0;

  constructor(player1Type: 'Human' | 'Cpu', player2Type: 'Cpu', rounds: number) {
    this.rounds = rounds;
    this.player1 = PlayerFactory.createPlayer(player1Type);
    this.player2 = PlayerFactory.createPlayer(player2Type);
  }

  async play() {
    for (let round = 0; round < this.rounds; round++) {
      const player1hands = await this.player1.getHands(1);
      const player2hands = await this.player2.getHands(1);

      const result = GameHelper.compareHands(player1hands, player2hands);
      if (result.result.includes('Player 1 wins the match!')) {
        this.player1Score++;
      } else if (result.result.includes('Player 2 wins the match!')) {
        this.player2Score++;
      } else {
        this.ties++;
      }
    }

    console.log(`Final Score: Player 1 - ${this.player1Score}, Player 2 - ${this.player2Score}, Ties - ${this.ties}`);
  }

  static simulateGame(player1Type: 'Cpu', player2Type: 'Cpu', rounds: number) {
    let player1Score = 0;
    let player2Score = 0;
    let ties = 0;

    const choices = ['Rock', 'Paper', 'Scissors'];

    for (let round = 0; round < rounds; round++) {
      const player1hand = choices[Math.floor(Math.random() * choices.length)];
      const player2hand = choices[Math.floor(Math.random() * choices.length)];

      if (player1hand === player2hand) {
        ties++;
      } else if (
        (player1hand === 'Rock' && player2hand === 'Scissors') ||
        (player1hand === 'Paper' && player2hand === 'Rock') ||
        (player1hand === 'Scissors' && player2hand === 'Paper')
      ) {
        player1Score++;
      } else {
        player2Score++;
      }
    }

    console.log(`Simulated Final Score: Player 1 - ${player1Score}, Player 2 - ${player2Score}, Ties - ${ties}`);
  }
}
