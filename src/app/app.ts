import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from '../views/homepage/homepage';
import { Taskpage } from '../views/taskpage/taskpage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taskpage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trello');
}
