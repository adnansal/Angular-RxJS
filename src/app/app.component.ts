import { Component, VERSION } from '@angular/core';
import { of, from, throwError } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 8, 9, 10, 12).subscribe(console.log);
    from([2, 4, 8, 9, 8, 12]).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occurred ${err}`),
      () => console.log(`complete`)
    );
  }
}
