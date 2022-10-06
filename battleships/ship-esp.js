const board = document.getElementById("opponent-board");
let ships = board.querySelectorAll("[ship]");

const showShips = () => {
    ships.forEach(ship => {
        if (ship.getAttribute("ship") != "empty") {
            let shipElements = board.querySelectorAll(`[ship="${ship.getAttribute("ship")}"]`);
            shipElements.forEach(shipElement => {
                shipElement.style.border = "2px solid red";
            });
        }
    });
}

socket.on("takeTurnResponse", (e) => {
    if (e.turnType == "shootCoordinate") {
        showShips();
    }
})

showShips();
