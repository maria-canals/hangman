let game;
let movieChosen;
movieChosen = await filterPuzzle()

let puzzle = movieChosen.toLowerCase().split('')
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

const startGame = (e) => {
    const inputCharacter = e.key;
    str += inputCharacter
    characterChosenDIV.textContent = str
    game.checkInputCharacter(inputCharacter)
    game.renderCharacter()
    game.renderRemaningGuesses()
    const resultGame = game.checkGameStatus()
    if (!resultGame) {
        window.removeEventListener('keypress', startGame)

        resetButton.classList.replace('d-none', 'd-block')
    }
}

let str = ''
const resetGame = async () => {
    resetButton.classList.replace('d-block', 'd-none');
    gameResult.textContent = '';
    str = ''
    characterChosenDIV.textContent = '';
    game.resetCharacter()


    movieChosen = await filterPuzzle()
    puzzle = movieChosen.toLowerCase().split('')
    puzzleSplit = movieChosen.toLowerCase().split('').filter(ch => ch !== ' ');
    game = new Hangman(true, puzzle, 5, puzzleSplit);
    console.log('NEW HANGMAN', game)
    render(puzzle)
    game.renderRemaningGuesses()
    window.addEventListener('keypress', startGame)
}
window.addEventListener('keypress', startGame)

resetButton.addEventListener('click', resetGame)


console.log(game)