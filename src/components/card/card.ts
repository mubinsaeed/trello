import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';

  ngOnInit() {
    console.log('Card Inputs:', {
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
    });
  }
}
