import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterasuserComponent } from './registerasuser.component';

describe('RegisterasuserComponent', () => {
  let component: RegisterasuserComponent;
  let fixture: ComponentFixture<RegisterasuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterasuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
