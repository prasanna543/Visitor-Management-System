import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGridComponent } from './faculty-grid.component';

describe('FacultyGridComponent', () => {
  let component: FacultyGridComponent;
  let fixture: ComponentFixture<FacultyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
