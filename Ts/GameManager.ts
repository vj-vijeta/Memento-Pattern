import { GameStateMemento } from "./GameStateMemento";

// Caretaker (Game Manager)
export class GameManager {
    private history: GameStateMemento[] = [];

    // Save the current state
    saveState(memento: GameStateMemento): void {
        this.history.push(memento);
    }

    // Revert to the previous state
    undo(): GameStateMemento | null {
        return this.history.pop() || null;
    }
}
