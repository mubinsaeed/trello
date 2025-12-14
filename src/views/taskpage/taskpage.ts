import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Card } from '../../components/card/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-taskpage',
  imports: [MatGridListModule, Card, HttpClientModule, CommonModule],
  templateUrl: './taskpage.html',
  styleUrl: './taskpage.scss',
})
export class Taskpage implements OnInit {
  cardData: {
    title: string;
    subtitle: string;
    description: string;
    status: 'today' | 'thisWeek' | 'later';
  }[] = [];

  todayCards: typeof this.cardData = [];
  thisWeekCards: typeof this.cardData = [];
  laterCards: typeof this.cardData = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<typeof this.cardData>('http://localhost:3000/cards').subscribe((res) => {
      this.cardData = res;

      // Filter cards for different columns
      this.todayCards = this.cardData.filter((c) => c.status.toLowerCase() === 'today');
      this.thisWeekCards = this.cardData.filter((c) => c.status.toLowerCase() === 'thisweek');
      this.laterCards = this.cardData.filter((c) => c.status.toLowerCase() === 'later');
    });
  }
}
