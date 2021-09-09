var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  data: {
    datasets: [
      {
        type: "bar",
        label: "Ex- factory Monthly Sales",
        data: [60, 58, 75, 80, 89, 70, 55, 87, 75, 65,85],
        backgroundColor: ["rgb(0, 113, 197)"],
      },
      {
        type: "line",
        label: "Target",
        data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
        backgroundColor: ["rgb(0,0,0,1)"],
      },
    ],
    labels: [
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Ex factory sales in Millions vs Target",
        font: {
          size: 18,
        },
      },
    },
  },
});
// Cum Chart
var ctx = document.getElementById("cumChart");
var cumChart = new Chart(ctx, {
  data: {
    datasets: [
      {
        type: "bar",
        label: "Ex- factory Monthly Sales",
        data: [700],
        backgroundColor: ["rgb(0, 113, 197)"],
      },
      {
        type: "bar",
        label: "Target",
        data: [900],
        display: true,
        backgroundColor: ["rgb(0,0,0,1)"],
      },
    ],
    labels: ["Cumm"],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stacked: false,
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Cumulative ex-factory sales in Millions vs Target",
        font: {
          size: 18,
        },
      },
    },
  },
});


// Story

document.querySelectorAll(".story-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("change");
      btn.nextElementSibling.classList.toggle("change");
    });
  });