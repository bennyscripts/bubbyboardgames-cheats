const joinSpam=(o,m)=>{for(let a=0;a<o;a++)socket.emit("joinRoom",{room:m,player:"funny-"+Math.floor(1e6*Math.random())})};joinSpam(prompt("How many players?"),prompt("Room name?"));
