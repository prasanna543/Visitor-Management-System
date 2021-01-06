import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorGridComponent } from './visitor-grid.component';

describe('VisitorGridComponent', () => {
  let component: VisitorGridComponent;
  let fixture: ComponentFixture<VisitorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
