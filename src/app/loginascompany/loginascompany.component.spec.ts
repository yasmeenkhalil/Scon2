import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginascompanyComponent } from './loginascompany.component';

describe('LoginascompanyComponent', () => {
  let component: LoginascompanyComponent;
  let fixture: ComponentFixture<LoginascompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginascompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginascompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
