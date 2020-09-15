import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydiscountsComponent } from './mydiscounts.component';

describe('MydiscountsComponent', () => {
  let component: MydiscountsComponent;
  let fixture: ComponentFixture<MydiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
