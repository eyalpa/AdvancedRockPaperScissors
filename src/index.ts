import { GameHelper } from "./utils/gameHelper.js";
import { HumanPlayer } from "./players/humanPlayer.js";
import { PlayerFactory } from "./players/PlayerFactory.js";
import { PlayerType } from "./types/index.js";

const run = async () => {
  const args = process.argv.slice(2);
  const numberOfHands = Number(
    GameHelper.getValueFromArgs(args, "numberOfHands", 3)
  );
  const numberOfRounds = Number(
    GameHelper.getValueFromArgs(args, "numberOfRounds", 2)
  );

  const player1Type =
    GameHelper.getValueFromArgs(args, "player1Type") ||
    (await GameHelper.choosePlayerType("Choose player 1 type"));
  const player2Type =
    GameHelper.getValueFromArgs(args, "player2Type") ||
    (await GameHelper.choosePlayerType("Choose player 2 type"));

  await startGame(player1Type, player2Type, numberOfRounds, numberOfHands);

  console.log("Thanks for playing! Goodbye.");
};

const startGame = async (
  player1Type: PlayerType,
  player2Type: PlayerType,
  numberOfRounds: number,
  numberOfHands: number
) => {
  const player1 = PlayerFactory.createPlayer(player1Type);
  const player2 = PlayerFactory.createPlayer(player2Type);
  let player1TotalWins = 0;
  let player2TotalWins = 0;
  let totalTies = 0;

  for (let index = 0; index < numberOfRounds; index++) {
    console.log(`Round ${index + 1}/${numberOfRounds}:`);
    console.log("Player 1 Choose Hands:");
    const p1Hands = await player1.getHands(numberOfHands);
    console.log(`Player 1 Hands: ${p1Hands}`);

    console.log("Player 2 Choose Hands:");
    const p2Hands = await player2.getHands(numberOfHands);
    console.log(`Player 2 Hands: ${p1Hands}`);

    const result = GameHelper.compareHands(p1Hands, p2Hands);
    console.log(result);
    switch (result.result) {
      case "Player 1 wins the match!":
        player1TotalWins++;
        break;
      case "Player 2 wins the match!":
        player2TotalWins++;
        break;
      case "The match is a tie!":
        totalTies++
        break;
    }
  }


  console.log(`\nFinal Score:`);
  console.log(`Player 1 Total Wins: ${player1TotalWins}`);
  console.log(`Player 2 Total Wins: ${player2TotalWins}`);
  console.log(`Total Ties: ${totalTies}`);
  let finalResult;
  if (player1TotalWins > player2TotalWins) {
    finalResult = 'Overall Winner: Player 1';
  } else if (player2TotalWins > player1TotalWins) {
    finalResult = 'Overall Winner: Player 2';
  } else {
    finalResult = 'Overall Result: It\'s a tie!';
  }
  console.log(finalResult);
};

run();
