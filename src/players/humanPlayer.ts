import { GameHelper } from '../gameHelper.js';
export class HumanPlayer{
  getHands = async (numberOfHands: number) => {
    const hands = [];
    for (let index = 0; index < numberOfHands; index++) {
      const hand = await GameHelper.chooseHand(`Choose hand (${index + 1}/${numberOfHands})`)
      hands.push(hand);
    }
    return hands;
  };
}