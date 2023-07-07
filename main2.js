import Room from "./Room.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'

Chart.defaults.backgroundColor = "white";
Chart.defaults.color = "#00ace0";

const sampleRoom = new Room("Sample Room", 1000);

const canvas = document.querySelector(".chart");
let chart;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
(async _ => {
    for (let i = 0; i < 20; i++) {
        const data = sampleRoom.getTimeSeriesData();
        updateGraph(data);
        await delay(1000);
    }
})();

  fetch('./RoomData.json').then(response => response.json()).then(json => {
    console.log(json);
    chart = new Chart(canvas, {
        type: 'line',
        data: {
            datasets: [{
                label: 'SensERIE',
                data: json.SensERIE.occupants,
                borderColor: "#00ace0",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },{
                label: 'BiteSizeScience',
                data:json.BiteSizeScience.occupants,
                borderColor:"rgba(0,255,0,1)",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },
            {
                label: 'CummingsRoom',
                data:json.CummingsRoom.occupants,
                borderColor:"#172e47",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },
            {
                label: 'ExploreYou',
                data:json.ExploreYou.occupants,
                borderColor:"rgba(100,100,0,1)",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },
            {
                label: 'Artifacts',
                data:json.Artifacts.occupants,
                borderColor:"rgba(0,100,100,1)",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },
            {
                label: 'Biodiversity',
                data:json.Biodiversity.occupants,
                borderColor:"rgba(255,0,0,1)",
                backgroundColor: "rgba(255, 255, 255, 0)"
            },
            {
                label: 'RethinkExtinct',
                data:json.RethinkExtinct.occupants,
                borderColor:"rgba(0,0,255,1)",
                backgroundColor: "rgba(255, 255, 255, 0)"
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


function updateGraph(data) {
    if (!chart)
        return;
    chart.data.labels = data.map((_,i)=>i);
    chart.update();
    console.log("hohoho");
}