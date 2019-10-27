import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-composition',
  templateUrl: './voter-composition.component.html',
  styleUrls: ['./voter-composition.component.css']
})
export class VoterCompositionComponent implements OnInit {

  radarChartOptions = {
    responsive: true
  };
  radarChartLabels = ['Gen Z', 'Millennials', 'Gen X', 'Baby Boomers', 'Silent'];

  radarChartData = [
    { data: [14, 18, 32, 45, 41], label: 'Biden' },
    { data: [53, 30, 16, 6, 1], label: 'Sanders' },
    { data: [4, 13, 17, 22, 28], label: 'Warren' },
    { data: [0, 4, 8, 4, 2], label: 'Harris' },
    { data: [0, 3, 3, 5, 4], label: 'Buttigieg' },
    { data: [9, 6, 3, 1, 0], label: "O'Rourke" },
    { data: [0, 1, 3, 1, 0], label: 'Booker' },
    { data: [0, 2, 1, 2, 3], label: 'Klobuchar' },
    { data: [0, 2, 0, 1, 0], label: 'Gabbard' },
    { data: [10, 5, 3, 1, 0], label: 'Yang' },
    { data: [0, 1, 1, 2, 1], label: 'Steyer' }
  ];
  radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

  onChartClick(event) {
    //console.log(event);
  }

}
