export interface iPlayer {
    getHands(numberOfHands: number): Promise<string[]>;
}
  