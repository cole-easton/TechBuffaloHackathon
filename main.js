import Room from "./Room.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

const sampleRoom = new Room("Sample Room", 500);

document.querySelector("#enter").onclick = _ => sampleRoom.registerEntrance();
document.querySelector("#exit").onclick = _ => sampleRoom.registerExit();
document.querySelector("#update").onclick = _ => updateGraph(sampleRoom.getTimeSeriesData());


const canvas = document.querySelector("#chart");
const ctx = canvas.getContext("2d");

function updateGraph(data) {
    console.log(data);
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'First dataset',
                data: data
            }],
            labels: data.map((_,i)=>i)
        },
        options: {
            scales: {
                y: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });

}
