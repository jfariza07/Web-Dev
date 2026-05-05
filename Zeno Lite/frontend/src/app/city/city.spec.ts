import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityComponent } from './city';

describe('City', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
