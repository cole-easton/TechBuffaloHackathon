import Room from "./Room.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

Chart.defaults.backgroundColor = "white";
Chart.defaults.color = "#00ace0";

const sampleRoom = new Room("Sample Room", 500);
<<<<<<< HEAD
=======

document.querySelector("#enter").onclick = _ => sampleRoom.registerEntrance();
document.querySelector("#exit").onclick = _ => sampleRoom.registerExit();
const avgDurationSpan = document.querySelector("#avg-duration");
>>>>>>> a60d8f162a0de5b9b3b2770694a7f6243859c93a

const canvas = document.querySelector("#chart");
const ctx = canvas.getContext("2d");

<<<<<<< HEAD
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
(async _ => {
    for (let i = 0; i < 20; i++) {
        const data = sampleRoom.getTimeSeriesData();
        updateGraph(data);
        await delay(1000);
    }
})()

  let chart;
  fetch('./RoomData.json').then(response => response.json()).then(json => {
    console.log(json);
    chart = new Chart(canvas, {
        type: 'line',
        data: {
            datasets: [{
                label: 'SensERIE',
                data: json.SensERIE.occupants,
                borderColor: "#00ace0",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },{
                label: 'BiteSizeScience',
                data:json.BiteSizeScience.occupants,
                borderColor:"rgba(0,255,0,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },
            {
                label: 'CummingsRoom',
                data:json.CummingsRoom.occupants,
                borderColor:"rgba(255,255,0,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },
            {
                label: 'ExploreYou',
                data:json.ExploreYou.occupants,
                borderColor:"rgba(100,100,0,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },
            {
                label: 'Artifacts',
                data:json.Artifacts.occupants,
                borderColor:"rgba(0,100,100,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },
            {
                label: 'Biodiversity',
                data:json.Biodiversity.occupants,
                borderColor:"rgba(255,0,0,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            },
            {
                label: 'RethinkExtinct',
                data:json.RethinkExtinct.occupants,
                borderColor:"rgba(0,0,255,0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            }
            ],
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
   })

=======

setInterval(() => {
    const data = sampleRoom.getTimeSeriesData();
    updateGraph(data);
    const avgDuration = sampleRoom.getAverageDuration();
    avgDurationSpan.innerHTML = avgDuration?`${(avgDuration/1000).toFixed(2)}&nbsp;s`:"N/A";
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
>>>>>>> a60d8f162a0de5b9b3b2770694a7f6243859c93a

function updateGraph(data) {
    if (!chart)
        return;
    console.log(chart.data.datasets[0].data);
    const currentLength = chart.data.datasets[0].data.length;
    chart.data.datasets[0].data.push(...data.filter((_,i)=>i>=currentLength));
    chart.data.labels = data.map((_,i)=>i);
    chart.update();
    console.log("hohoho");
}