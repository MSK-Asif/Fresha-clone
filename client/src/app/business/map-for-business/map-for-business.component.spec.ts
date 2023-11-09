import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapForBusinessComponent } from './map-for-business.component';

describe('MapForBusinessComponent', () => {
  let component: MapForBusinessComponent;
  let fixture: ComponentFixture<MapForBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapForBusinessComponent]
    });
    fixture = TestBed.createComponent(MapForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
