import { GameHelper } from '../utils/gameHelper.js';
import { iPlayer } from './IPlayer.js'

export class CPUPlayer implements iPlayer {
    async getHands(numberOfHands: number): Promise<string[]> {
      const hands = [];
      const choices = ['Rock', 'Paper', 'Scissors'];
      for (let index = 0; index < numberOfHands; index++) {
        const hand = choices[Math.floor(Math.random() * choices.length)];
        hands.push(hand);
      }
      return hands;
    }
  }
  