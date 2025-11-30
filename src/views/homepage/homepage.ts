import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'home-page',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage  implements OnInit {

    ngOnInit(): void {
        
    }

    testFunc(val:string): string {
            val+= "This is testing";
            return val;
    }
}
