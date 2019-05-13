import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDailogComponentComponent } from './dashboard-dailog-component.component';

describe('DashboardDailogComponentComponent', () => {
  let component: DashboardDailogComponentComponent;
  let fixture: ComponentFixture<DashboardDailogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDailogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDailogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
