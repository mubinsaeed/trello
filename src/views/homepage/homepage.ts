import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';


@Component({
  selector: 'home-page',
  imports: [CommonModule, Navbar],
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
