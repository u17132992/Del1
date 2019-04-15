import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyaskedquestionComponent } from './frequentlyaskedquestion.component';

describe('FrequentlyaskedquestionComponent', () => {
  let component: FrequentlyaskedquestionComponent;
  let fixture: ComponentFixture<FrequentlyaskedquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyaskedquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyaskedquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
