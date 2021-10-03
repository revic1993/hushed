import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HushedItemComponent } from './hushed-item.component';

describe('HushedItemComponent', () => {
  let component: HushedItemComponent;
  let fixture: ComponentFixture<HushedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HushedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HushedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
