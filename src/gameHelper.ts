import inquirer from "inquirer";

export class GameHelper {

static async choosePlayerType(message: string) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message,
        choices: ['Human', 'Cpu'],
      },
    ]);
    return answer.choice;
  }

  static async chooseHand(message: string) {
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

  static getValueFromArgs = (key: string) => {
    /*
    TODO: complete this function to return the value of the key from the process.argv array
    */
      return undefined;
    };
}