import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalComponent } from './hotal.component';

describe('HotalComponent', () => {
  let component: HotalComponent;
  let fixture: ComponentFixture<HotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
