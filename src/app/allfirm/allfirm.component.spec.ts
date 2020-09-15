import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfirmComponent } from './allfirm.component';

describe('AllfirmComponent', () => {
  let component: AllfirmComponent;
  let fixture: ComponentFixture<AllfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
