const joinSpam = (amount, room) => {
    for (let i = 0; i < amount; i++) {
        socket.emit("joinRoom", {
            room: room,
            player: "funny-" + Math.floor(Math.random() * 1000000)
        })
    }
}

joinSpam(prompt("How many players?"), prompt("Room name?"))
