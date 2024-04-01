import { Game } from "./Game";
import { GameManager } from "./GameManager";
import { GameState } from "./GameState";
import { GameStateMemento } from "./GameStateMemento";

const game = new Game();
const manager = new GameManager();

// Start the game
game.startGame();
manager.saveState(game.saveState());

// Pause the game
game.pauseGame();
manager.saveState(game.saveState());

// End the game
game.endGame();
manager.saveState(game.saveState());

// Simulate reverting to the previous state
const previousState = manager.undo();
if (previousState) {
    game.restoreState(previousState);
}

console.log("Current Game State:", GameState[game.getState()]); // Displaying state name
