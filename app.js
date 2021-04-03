
const movieChosen = await filterPuzzle()

let game;
let puzzle = movieChosen.toLowerCase();
puzzle = puzzle.split('')
let puzzleSplit = movieChosen.toLowerCase().split('').filter(ch => ch !== ' ');

game = new Hangman(true, puzzle, 5, puzzleSplit);


const render = (puzzle) => {
    const puzzleDIV = document.getElementById('puzzle');
    puzzle.forEach(letter => {
        let character;
        if (letter === ' ') {
            character = document.createElement('span');
            character.classList.add('character-space');

        } else {
            character = document.createElement('span');
            character.classList.add('character')
            character.setAttribute('id', letter);
        }

        puzzleDIV.append(character)

    })
}

render(puzzle)
game.renderRemaningGuesses()
const resetButton = document.getElementById('resetButton')
const characterChosenDIV = document.getElementById('charactersChosen')

let str = ''
const startGame = (e) => {
    const inputCharacter = e.key;
    str += inputCharacter
    characterChosenDIV.textContent = str
    game.checkInputCharacter(inputCharacter)
    const resultGame = game.checkGameStatus()
    game.renderCharacter()
    game.renderRemaningGuesses()
    game.checkGameStatus()
    if (!resultGame) {
        window.removeEventListener('keypress', startGame)

        resetButton.classList.replace('d-none', 'd-block')
    }
}

window.addEventListener('keypress', startGame)

resetButton.addEventListener('click', () => {
    resetButton.classList.replace('d-block', 'd-none');
    gameResult.textContent = '';
    str = ''
    characterChosenDIV.textContent = ''
    game = new Hangman(true, puzzle, 5, puzzleSplit)
    console.log(game)
    render(puzzle)
    game.renderRemaningGuesses()
    game.resetCharacter()
    window.addEventListener('keypress', startGame)

})

console.log(game)