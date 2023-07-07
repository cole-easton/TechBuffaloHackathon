import Room from "./Room.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';

const sampleRoom = new Room("Sample Room", 500);
const canvas = document.querySelector("#chart");
const ctx = canvas.getContext("2d");
let chart; // Declare chart as a global variable

document.querySelector("#enter").onclick = () => {
  sampleRoom.registerEntrance();
  updateGraph(sampleRoom.getTimeSeriesData());
};

document.querySelector("#exit").onclick = () => {
  sampleRoom.registerExit();
  updateGraph(sampleRoom.getTimeSeriesData());
};



function updateGraph(data) {
  console.log(data);
  if (chart) {
    // If the chart already exists, destroy it before updating
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'First dataset',
        data: data
      }],
      labels: data.map((_, i) => i)
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
