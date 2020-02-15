import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPostCodeComponent } from './check-post-code.component';

describe('CheckPostCodeComponent', () => {
  let component: CheckPostCodeComponent;
  let fixture: ComponentFixture<CheckPostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPostCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
