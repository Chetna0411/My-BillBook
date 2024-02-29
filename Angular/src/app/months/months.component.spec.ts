/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsComponent } from './months.component';

describe('MonthsComponent', () => {
  let component: MonthsComponent;
  let fixture: ComponentFixture<MonthsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsComponent]
    });
    fixture = TestBed.createComponent(MonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsComponent } from './months.component';

describe('MonthsComponent', () => {
  let component: MonthsComponent;
  let fixture: ComponentFixture<MonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
