import {Router} from '@angular/router';
import {Grade} from './grade';

export function navigate(grade: Grade, router: Router) {
  switch (grade) {
    case Grade.RightAnswer: {
      router.navigate(['/', 'right-answer']).then(() => console.log('right answer'));
      break;
    }

    case Grade.InputError: {
      router.navigate(['/', 'input-error']).then(() => console.log('input error'));
      break;
    }
    case Grade.LargeAnswer: {
      router.navigate(['/', 'large-answer']).then(() => console.log('large answer'));
      break;
    }
    case Grade.SmallAnswer: {
      router.navigate(['/', 'small-answer']).then(() => console.log('small answer'));
      break;
    }
  }
}
