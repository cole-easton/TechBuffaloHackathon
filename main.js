import Room from "./Room.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

Chart.defaults.backgroundColor = "white";
Chart.defaults.color = "#00ace0";

const sampleRoom = new Room("Sample Room", 500);

document.querySelector("#enter").onclick = _ => sampleRoom.registerEntrance();
document.querySelector("#exit").onclick = _ => sampleRoom.registerExit();
const avgDurationSpan = document.querySelector("#avg-duration");
const totalVisitsSpan = document.querySelector("#total-visits");

const canvas = document.querySelector("#chart");
const ctx = canvas.getContext("2d");


setInterval(() => {
    const data = sampleRoom.getTimeSeriesData();
    updateGraph(data);
    const avgDuration = sampleRoom.getAverageDuration();
    avgDurationSpan.innerHTML = avgDuration?`${(avgDuration/1000).toFixed(2)}&nbsp;s`:"N/A";
    totalVisitsSpan.textContent = sampleRoom.totalVisits;
}, 500);

const chart = new Chart(canvas, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Visitors',
            data: [],
            borderColor: "#00ace0",
            backgroundColor: "rgba(255, 255, 255, 0.4)"
        }],
        labels: []
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        },
    }
});

function updateGraph(data) {
    console.log(chart.data.datasets[0].data);
    const currentLength = chart.data.datasets[0].data.length;
    chart.data.datasets[0].data.push(...data.filter((_, i) => i >= currentLength));
    chart.data.labels = data.map((_, i) => i);
    chart.update();
    console.log("hohoho");
}

