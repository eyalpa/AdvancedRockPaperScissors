import { HumanPlayer } from '../players/humanPlayer.js';
import { CPUPlayer } from '../players/cpuPlayer.js';
import { MonkeyPlayer } from '../players/monkeyPlayer.js';
import { iPlayer } from '../players/IPlayer.js';
import { PlayerType } from '../types/index.js'
export class PlayerFactory {
  static createPlayer(type: PlayerType ): iPlayer {
    switch(type) {
      case 'Human':
        return new HumanPlayer();
      case 'Cpu':
        return new CPUPlayer();
      case 'Monkey':
        return new MonkeyPlayer();
      default:
        throw new Error('Invalid player type');
    }
  }
}
