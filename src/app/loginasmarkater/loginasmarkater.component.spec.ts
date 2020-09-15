import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginasmarkaterComponent } from './loginasmarkater.component';

describe('LoginasmarkaterComponent', () => {
  let component: LoginasmarkaterComponent;
  let fixture: ComponentFixture<LoginasmarkaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginasmarkaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginasmarkaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
