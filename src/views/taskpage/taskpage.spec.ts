import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskpage } from './taskpage';

describe('Taskpage', () => {
  let component: Taskpage;
  let fixture: ComponentFixture<Taskpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Taskpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
