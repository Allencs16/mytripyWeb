import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonthExpensesComponent } from './chart-month-expenses.component';

describe('ChartMonthExpensesComponent', () => {
  let component: ChartMonthExpensesComponent;
  let fixture: ComponentFixture<ChartMonthExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMonthExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMonthExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
