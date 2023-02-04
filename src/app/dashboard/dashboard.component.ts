import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    var chart = new Chart('meuCanvas1', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
        {
          label: 'Dataset 1',
          data: [32, 25, 40],
          borderColor: '#36A2EB',
          backgroundColor: '#FF0657',
        },
      ]
      },
    });

    var chart = new Chart('meuCanvas2', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
        {
          label: 'Dataset 1',
          data: [32, 25, 40],
          borderColor: '#36A2EB',
          backgroundColor: '#FF0657',
        },
      ]
      },
    });

    var chart = new Chart('meuCanvas3', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
        {
          label: 'Dataset 1',
          data: [32, 25, 40],
          borderColor: '#36A2EB',
          backgroundColor: '#FF0657',
        },
      ]
      },
    });
  }

}
