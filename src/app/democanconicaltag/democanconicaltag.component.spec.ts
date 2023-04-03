import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocanconicaltagComponent } from './democanconicaltag.component';

describe('DemocanconicaltagComponent', () => {
  let component: DemocanconicaltagComponent;
  let fixture: ComponentFixture<DemocanconicaltagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocanconicaltagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemocanconicaltagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
