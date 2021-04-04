
class Hangman {
    constructor(stillPlaying, puzzle, lives, puzzleSplit) {
        this.stillPlaying = stillPlaying,
            this.lives = lives,
            this.puzzle = puzzle,
            this.guessedCharacter = [],
            this.charachterToGuess = puzzleSplit
    }

    checkInputCharacter(inputCharacter) {
        const matchCharacter = this.charachterToGuess.some(ch => ch === inputCharacter)

        if (matchCharacter) {
            this.guessedCharacter.push(inputCharacter);
            this.charachterToGuess = this.charachterToGuess.filter(ch => ch !== inputCharacter)
            console.log(this.charachterToGuess)
        }
        else {
            if (!this.puzzle.includes(inputCharacter)) {
                this.lives--;
            }

        }
    }

    renderCharacter() {
        const allSpans = document.querySelectorAll('span')
        for (const sp of allSpans) {
            for (const puzzle of this.guessedCharacter) {
                if (sp.id === puzzle) {
                    sp.textContent = puzzle;
                }
            }
        }
    }

    resetCharacter() {
        const allSpans = document.querySelectorAll('span')
        for (const sp of allSpans) {
            sp.textContent = '';
        }
        allSpans.forEach(span => span.remove())
    }

    renderRemaningGuesses() {
        const remaningGUesses = document.getElementById('remaininguesses_p')
        return remaningGUesses.textContent = `Remaing Guesses: ${this.lives}`

    }

    checkGameStatus() {
        let resultMessage = document.getElementById('gameResult')
        if (this.charachterToGuess.length === 0 && this.lives > 0) {
            resultMessage.textContent = "YOU WIN";
            return !this.stillPlaying
        } else if (this.charachterToGuess.length > 0 && this.lives === 0) {
            resultMessage.textContent = "YOU LOST";
            return !this.stillPlaying
        } else {
            console.log('keep playing')
            return this.stillPlaying
        }
    }
}

