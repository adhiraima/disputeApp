import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputePanelComponent } from './dispute-panel.component';

describe('DisputePanelComponent', () => {
  let component: DisputePanelComponent;
  let fixture: ComponentFixture<DisputePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
