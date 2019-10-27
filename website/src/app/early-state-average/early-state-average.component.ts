import { Component, OnInit } from '@angular/core';
import Iowa from '../../assets/Iowa.json';
import Nevada from '../../assets/Nevada.json';
import NewHampshire from '../../assets/New Hampshire.json';
import SouthCarolina from '../../assets/South Carolina.json';

const accepted = ["Biden", "Warren", "Sanders", "Buttigieg", "Harris", "Steyer", "Booker", "Klobuchar", "Yang", "Gabbard", "O'Rourke"];

@Component({
  selector: 'app-early-state-average',
  templateUrl: './early-state-average.component.html',
  styleUrls: ['./early-state-average.component.css']
})
export class EarlyStateAverageComponent implements OnInit {

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Early State Polling Average",
      fontSize: 20
    },
    legend: {
      labels: {
        padding: 25
      }
    },
    scales: {
      xAxes: [{
        barPercentage: 1,
        gridLines: {
          display: false
        }
      }]
    }
  };

  chartData = [];

  chartLabels = accepted;

  onChartClick(event) {
    //console.log(event);
  }

  constructor() { 

    this.chartData.push({ data: [], label: "Iowa"})
    this.chartData.push({ data: [], label: "New Hampshire"})
    this.chartData.push({ data: [], label: "South Carolina"})
    this.chartData.push({ data: [], label: "Nevada"})

    for(var x in accepted) {
      this.chartData[0].data.push(Iowa[accepted[x]])
      this.chartData[1].data.push(NewHampshire[accepted[x]])
      this.chartData[2].data.push(SouthCarolina[accepted[x]])
      this.chartData[3].data.push(Nevada[accepted[x]])
    }

    //console.log(this.chartData[0])

    /*
    for(var x in Iowa) {
      if (accepted.includes(x)) {
        this.chartData[0].data.push(Iowa[x]);
      }
    }
    for(var x in NewHampshire) {
      if (accepted.includes(x)) {
        this.chartData[1].data.push(NewHampshire[x]);
      }
    }
    for(var x in SouthCarolina) {
      if (accepted.includes(x)) {
        this.chartData[2].data.push(SouthCarolina[x]);
      }
    }
    for(var x in Nevada) {
      if (accepted.includes(x)) {
        this.chartData[3].data.push(Nevada[x]);
      }
    }
    */
  }

  ngOnInit() {
  }

}
