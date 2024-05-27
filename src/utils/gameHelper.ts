import minimist from 'minimist';
import inquirer from 'inquirer';
import { PlayerType } from '../types/index.js';

export class GameHelper {
  static async chooseHand(message: string): Promise<string> {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message,
        choices: ['Rock', 'Paper', 'Scissors'],
      },
    ]);
    return answer.choice;
  }

  static async choosePlayerType(message: string): Promise<PlayerType> {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message,
        choices: ['Human', 'Cpu', 'Monkey'],
      },
    ]);
    return answer.choice as PlayerType;
  }

  static getValueFromArgs(args: string[], key: string, defaultValue: any = undefined): any {
    const parsedArgs = args.reduce((acc, arg) => {
      const [k, v] = arg.split('=');
      acc[k] = v;
      return acc;
    }, {} as Record<string, any>);

    return parsedArgs[key] !== undefined ? parsedArgs[key] : defaultValue;
  }

  static compareHands(player1hands: string[], player2hands: string[]) {
    if (player1hands.length !== player2hands.length) {
      throw new Error('Both players must have the same number of hands.');
    }

    const hands = ['Rock', 'Paper', 'Scissors'];
    let player1Wins = 0;
    let player2Wins = 0;
    let ties = 0;

    for (let i = 0; i < player1hands.length; i++) {
      const player1hand = player1hands[i];
      const player2hand = player2hands[i];

      if (!hands.includes(player1hand) || !hands.includes(player2hand)) {
        throw new Error('Invalid hand choice.');
      }

      if (player1hand === player2hand) {
        ties++;
      } else if (
        (player1hand === 'Rock' && player2hand === 'Scissors') ||
        (player1hand === 'Paper' && player2hand === 'Rock') ||
        (player1hand === 'Scissors' && player2hand === 'Paper')
      ) {
        player1Wins++;
      } else {
        player2Wins++;
      }

      const remainingRounds = player1hands.length - (i + 1);
      if (player1Wins > player2Wins + remainingRounds) {
        console.log('Player 1 wins the match without Doubt!');
        return {
          player1Wins,
          player2Wins,
          ties,
          result: 'Player 1 wins the match!',
        };
      } else if (player2Wins > player1Wins + remainingRounds) {
        console.log('Player 2 wins the match without Doubt!');
        return {
          player1Wins,
          player2Wins,
          ties,
          result: 'Player 1 wins the match!',
        };
      }

    }

    return {
      player1Wins,
      player2Wins,
      ties,
      result: player1Wins > player2Wins ? 'Player 1 wins the match!' :
              player1Wins < player2Wins ? 'Player 2 wins the match!' :
              'The match is a tie!',
    };
  }

  static compareHand(player1hand: string, player2hand: string) {
    const hands = ['Rock', 'Paper', 'Scissors'];
    if (!hands.includes(player1hand) || !hands.includes(player2hand)) {
      throw new Error('Invalid hand choice.');
    }

    if (player1hand === player2hand) {
      return 'It\'s a tie!';
    }

    if (
      (player1hand === 'Rock' && player2hand === 'Scissors') ||
      (player1hand === 'Paper' && player2hand === 'Rock') ||
      (player1hand === 'Scissors' && player2hand === 'Paper')
    ) {
      return 'Player 1 wins!';
    } else {
      return 'Player 2 wins!';
    }
  } 

}