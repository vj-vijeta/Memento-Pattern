import { GameState } from "./GameState";

// Memento
export class GameStateMemento {
    constructor(private state: GameState) {}

    getState(): GameState {
        return this.state;
    }
}
