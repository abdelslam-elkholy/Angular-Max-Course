import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditeComponent } from './shopping-edite.component';

describe('ShoppingEditeComponent', () => {
  let component: ShoppingEditeComponent;
  let fixture: ComponentFixture<ShoppingEditeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingEditeComponent]
    });
    fixture = TestBed.createComponent(ShoppingEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
