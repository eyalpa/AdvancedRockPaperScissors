import { GameHelper } from '../utils/gameHelper.js';
import { iPlayer } from './IPlayer.js'
export class HumanPlayer implements iPlayer {
  async getHands(numberOfHands: number): Promise<string[]> {
    const hands = [];
    for (let index = 0; index < numberOfHands; index++) {
      const hand = await GameHelper.chooseHand(`Choose hand (${index + 1}/${numberOfHands})`);
      hands.push(hand);
    }
    return hands;
  }
}
