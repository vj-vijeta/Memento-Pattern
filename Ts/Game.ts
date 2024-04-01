import { GameState } from "./GameState";
import { GameStateMemento } from "./GameStateMemento";

export class Game {
    private state: GameState;

    constructor() {
        this.state = GameState.Start;
    }

    setState(state: GameState): void {
        this.state = state;
    }

    getState(): GameState {
        return this.state;
    }

    // Method to start the game
    startGame(): void {
        console.log("Starting the game...");
        this.setState(GameState.Playing);
    }

    // Method to pause the game
    pauseGame(): void {
        if (this.state === GameState.Playing) {
            console.log("Pausing the game...");
            this.setState(GameState.Paused);
        } else {
            console.log("Game is not currently playing.");
        }
    }

    // Method to end the game
    endGame(): void {
        console.log("Ending the game...");
        this.setState(GameState.GameOver);
    }

    // Memento creation
    saveState(): GameStateMemento {
        return new GameStateMemento(this.state);
    }

    // Memento restoration
    restoreState(memento: GameStateMemento): void {
        this.state = memento.getState();
    }
}
