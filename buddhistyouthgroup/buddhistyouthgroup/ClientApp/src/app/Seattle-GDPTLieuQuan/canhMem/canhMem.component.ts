import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-canhMem',
  templateUrl: './canhMem.component.html',
})

export class SeattleGDPTLieuQuanCanhMemComponent {

  Home: boolean = true;
  IsGoBack: boolean = false;

  course: string = "canhMem";
  IsLectures: boolean = false;


  constructor() { }

  GoBack()
  {
    this.Home = true;
    this.IsGoBack = false;
    this.IsLectures = false;
  }

  ViewLecture()
  {
    this.Home = false;
    this.IsGoBack = true;
    this.IsLectures = true;
  }

  public barChartColors: Array<any> = [
    {
    backgroundColor: [
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)',
      'rgba(255,255,0,1)'
    ],
  },
  {
    backgroundColor: [
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)',
      'rgba(255,140,0,1)'
    ],
  }
];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = [
    'Melinda', 'Anny', 'Julia', 'Emily',
    'Darwyn', 'Khang', 'Elalne',
    'Bao Chau', 'Thuy', 'Lena', 
    'Casey', 'Tommy', 'Kim', 'Jayden Le',
    'Jayden N.'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [42.2, 0, 54, 18, 42.16, 35.76, 58.2, 57.6, 65.8, 50.24, 64.8, 61.4, 25, 11.04, 0], label: 'Spring Quarter' },
    { data: [11, 56, 45, 62, 56, 52, 75, 69, 51, 53, 52, 66, 42, 59, 42], label: 'Fall Quarter' },
    //{ data: [38, 18, 70, 59, 66, 17, 60], label: 'Winter Quarter' },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
