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
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [
        {
          label: 'Valor PIB (trilhão)',
          data: [1873, 1449, 1609, 2544],
          borderColor: 'black',
          backgroundColor: '#3f51b5',
        },
      ]
      },
    });

    var chart = new Chart('meuCanvas2', {
      type: 'line',
      data: {
        labels: ['2019', '2020', '2021'],
        datasets: [
        {
          label: 'População do Brasil (milhão)',
          data: [211, 213, 214],
          backgroundColor: '#f7c350',
        },
      ]
      },
    });

    var chart = new Chart('meuCanvas3', {
      type: 'doughnut',
      data: {
        labels: ['São Paulo', 'Rio de Janeiro',' Brasília','Outros'],
        datasets: [
        {
          data: [10, 4, 3, 83],
          backgroundColor: [
            'red',
            '#3f51b5',
            'yellow',
            'green'
          ],
        },
      ]},
    });



    
  }

}
