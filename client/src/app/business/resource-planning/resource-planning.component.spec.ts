import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePlanningComponent } from './resource-planning.component';

describe('ResourcePlanningComponent', () => {
  let component: ResourcePlanningComponent;
  let fixture: ComponentFixture<ResourcePlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcePlanningComponent]
    });
    fixture = TestBed.createComponent(ResourcePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
