const board = document.getElementById("opponent-board");
let ships = board.querySelectorAll("[ship]");

const getShips = () => {
    let validShips = [];

    ships.forEach(ship => {
        if (ship.getAttribute("ship") != "empty") {
            validShips.push(ship);
        }
    });

    return validShips;
}

const showShips = () => {
    let ships = getShips();

    ships.forEach(ship => {
        let shipElements = board.querySelectorAll(`[ship="${ship.getAttribute("ship")}"]`);

        shipElements.forEach(shipElement => {
            shipElement.style.border = "2px solid red";
        });
    });
}

const isCoordsHit = (coords) => {
    let ship = board.querySelector(`[coordinates="${coords}"]`);

    if (ship.getAttribute("ship") == "empty") return true;
    if (ship.classList.contains("hit")) return true;

    return false;
}

const getRandomCoords = () => {
    let coords = [];

    coords.push(Math.floor(Math.random() * 10));
    coords.push(Math.floor(Math.random() * 10));

    if (isCoordsHit(coords.join(""))) {
        return getRandomCoords();
    }

    return coords;
}

const getOpponent = () => thisGame.players.filter(player => player != getPlayer())[0];
const getPlayer = () => thisGame.players[thisGame.meIdx];

socket.on("takeTurnResponse", (e) => {
    if (e.turnType == "shootCoordinate" && e.player.name != getPlayer().name) {
        let coords = getRandomCoords();
        thisGame.tryShooting(coords[0], coords[1]);
    }

    showShips();
})

showShips();
