import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentTime = '';
  private timer: any;

  constructor() {}

  ngOnInit(): void {
    this.updateTime();

    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  updateTime(): void {
    this.currentTime = new Date().toLocaleString();
  }
}
