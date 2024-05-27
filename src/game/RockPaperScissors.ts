export class RockPaperScissors {
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
  }
  