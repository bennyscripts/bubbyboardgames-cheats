game = {} // your game, see readme.md for how to
board = game['player']['board']

const numberToLetter = (number) => {
    return String.fromCharCode(65 + number);
}

board.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
        if (cell.ship.type != "empty") {
            console.log(`Ship type: ${cell.ship.type} at ${rowIndex + 1}${numberToLetter(cellIndex)}`);
        }
    })
})
