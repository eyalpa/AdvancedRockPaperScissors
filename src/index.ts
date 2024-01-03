import { GameHelper } from './gameHelper.js';
import { HumanPlayer } from './players/humanPlayer.js';

const run = async () => {
  const numberOfHands = Number(GameHelper.getValueFromArgs('numberOfHands') || 3);
  const numberOfRounds = Number(GameHelper.getValueFromArgs('numberOfRounds') || 2);

  const player1Type = GameHelper.getValueFromArgs(`player1Type`) || (await GameHelper.choosePlayerType('Choose player 1 type'));
  const player2Type = GameHelper.getValueFromArgs(`player2Type`) || (await GameHelper.choosePlayerType('Choose player 2 type'));


  console.log('Thanks for playing! Goodbye.');
};

const startGame = async (player1Type, player2Type, numberOfRounds, numberOfHands) => {
  const player1 = new HumanPlayer();
  const player2 = new HumanPlayer();

  for (let index = 0; index < numberOfRounds; index++) {
    console.log(`Round ${index + 1}/${numberOfRounds}:`);
    const p1Hands = await player1.getHands(numberOfHands);
    /*
    TODO: complete this function to play your first game (Part One)
    */
  }
}

run();
