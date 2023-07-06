import Room from "./Room.js";
const sampleRoom = new Room("Sample Room", 20000);

document.querySelector("#enter").onclick = _ => sampleRoom.registerEntrance();
document.querySelector("#exit").onlclick = _ => sampleRoom.registerExit();

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function updateGraph(data) {
    
}

