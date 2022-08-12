import { TestBed } from '@angular/core/testing';

import { GameQuizService } from './game-quiz.service';

describe('GameQuizService', () => {
  let service: GameQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
