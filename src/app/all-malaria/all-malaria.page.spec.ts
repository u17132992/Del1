import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMalariaPage } from './all-malaria.page';

describe('AllMalariaPage', () => {
  let component: AllMalariaPage;
  let fixture: ComponentFixture<AllMalariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMalariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMalariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
