import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nebulatest1Component } from './nebulatest1.component';

describe('Nebulatest1Component', () => {
  let component: Nebulatest1Component;
  let fixture: ComponentFixture<Nebulatest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nebulatest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nebulatest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
