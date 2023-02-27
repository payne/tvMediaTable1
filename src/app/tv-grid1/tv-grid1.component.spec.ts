import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvGrid1Component } from './tv-grid1.component';

describe('TvGrid1Component', () => {
  let component: TvGrid1Component;
  let fixture: ComponentFixture<TvGrid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvGrid1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
