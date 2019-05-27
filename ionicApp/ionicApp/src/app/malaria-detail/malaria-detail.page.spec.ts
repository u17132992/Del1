import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaDetailPage } from './malaria-detail.page';

describe('MalariaDetailPage', () => {
  let component: MalariaDetailPage;
  let fixture: ComponentFixture<MalariaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
