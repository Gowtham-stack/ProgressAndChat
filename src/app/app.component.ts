import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'App Component';
  color = '';
  condition = true;

  constructor() {
    console.log(this.title + ' constructor triggered');

  }

  ngAfterViewChecked(): void {
    console.log(this.title + ' ngAfterViewChecked triggered');
  }
  ngDoCheck(): void {
    console.log(this.title + ' ngDoCheck triggered');
  }
  ngAfterContentInit(): void {
    console.log(this.title + ' ngAfterContentInit triggered');
  }
  ngAfterContentChecked(): void {
    console.log(this.title + ' ngAfterContentChecked triggered');
  }
  ngAfterViewInit(): void {
    console.log(this.title + ' ngAfterViewInit triggered');
  }
  ngOnDestroy(): void {
    console.log(this.title + ' ngOnDestory triggered');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title + ' ngOnChanges triggered');
  }

  ngOnInit(): void {
    console.log(this.title + ' ngOnInit triggered');
  }
}
