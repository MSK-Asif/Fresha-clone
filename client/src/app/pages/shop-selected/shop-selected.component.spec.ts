import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSelectedComponent } from './shop-selected.component';

describe('ShopSelectedComponent', () => {
  let component: ShopSelectedComponent;
  let fixture: ComponentFixture<ShopSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopSelectedComponent]
    });
    fixture = TestBed.createComponent(ShopSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
