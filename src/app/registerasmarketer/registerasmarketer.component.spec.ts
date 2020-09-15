import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterasmarketerComponent } from './registerasmarketer.component';

describe('RegisterasmarketerComponent', () => {
  let component: RegisterasmarketerComponent;
  let fixture: ComponentFixture<RegisterasmarketerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterasmarketerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterasmarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
