const graphOptions = {
  chart: {
    id: "realtime",
    height: 350,
    type: "line",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Patient's EEG Data",
    align: "left",
  },

  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
    range: 60000,
  },
  yaxis: {
    max: 100,
  },
  legend: {
    show: false,
  },
};
export default graphOptions;
