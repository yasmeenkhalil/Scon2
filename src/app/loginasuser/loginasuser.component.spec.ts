import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginasuserComponent } from './loginasuser.component';

describe('LoginasuserComponent', () => {
  let component: LoginasuserComponent;
  let fixture: ComponentFixture<LoginasuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginasuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
