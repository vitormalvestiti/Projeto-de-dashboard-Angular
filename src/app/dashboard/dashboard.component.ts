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
          label: 'Vendas em quantidade',
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
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [
        {
          label: 'Vendas em reais',
          data: [8780, 9500, 9780, 10580],
          backgroundColor: '#f7c350',
        },
      ]
      },
    });

    var chart = new Chart('meuCanvas3', {
      type: 'doughnut',
      data: {
        labels: ['venda', 'financeiro','tecnologia','Outros'],
        datasets: [
        {
          label: 'numero de funcionairos',
          data: [10, 4, 8, 83],
          backgroundColor: [
            'red',
            '#3f51b5',
            'yellow',
            'green'
          ],
        },
      ]},
    });










    var chart = new Chart('meuCanvas5', {
      type: 'pie',
      data: {
        labels: ['2019', '2020', '2021'],
        datasets: [
        {
          label: 'População do Brasil (milhão)',
          data: [211, 213, 214],
          backgroundColor: [
            'red',
            '#3f51b5',
            'yellow',
          ],
        },
      ]
      },
    });



    var chart = new Chart('meuCanvas6', {
      type: 'bar',
  data: {
    labels: ["CS", "IT" , "ECE" , "EE", "ME", "BE"],
    datasets: [
      { label: '# of students',
        data: [105,124,78,91,62,56],
        backgroundColor :['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
],
  
borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
borderWidth : 1
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });



    
  }

}
