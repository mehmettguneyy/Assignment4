import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAnswerComponent } from './small-answer.component';

describe('SmallAnswerComponent', () => {
  let component: SmallAnswerComponent;
  let fixture: ComponentFixture<SmallAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
