import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeAnswerComponent } from './large-answer.component';

describe('LargeAnswerComponent', () => {
  let component: LargeAnswerComponent;
  let fixture: ComponentFixture<LargeAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
