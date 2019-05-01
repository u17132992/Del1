import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaareaComponent } from './malariaarea.component';

describe('MalariaareaComponent', () => {
  let component: MalariaareaComponent;
  let fixture: ComponentFixture<MalariaareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
