import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(rating: number): string {
    if (rating < 3) {
      return "Poor rating : " + rating;
    } else if (rating >= 3 && rating <= 4) {
      return "Good rating : " + rating;
    } else {
      return "Excellent rating : " + rating;
    }
  }

}
