import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProgressAndChat';
  // chartLabels: string[] = ['Real time data for the chart'];
  // chartType: ChartType = 'bar';
  // chartLegend: boolean = true;
  // constructor(public signalRService: SignalrService, private http: HttpClient) { }
  // ngOnInit() {
  //   this.signalRService.startConnection();
  //   this.signalRService.addTransferChartDataListener();
  //   this.startHttpRequest();
  // }
  // private startHttpRequest = () => {
  //   this.http.get('https://localhost:5001/api/chart')
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }
}
