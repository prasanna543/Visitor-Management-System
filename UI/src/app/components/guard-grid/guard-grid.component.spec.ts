import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardGridComponent } from './guard-grid.component';

describe('GuardGridComponent', () => {
  let component: GuardGridComponent;
  let fixture: ComponentFixture<GuardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
