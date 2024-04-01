import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: 'dynamic component created!',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .test {
      background: red;
      color: white;
      border: 4px dashed black;
      font-weight: bold;
    }
  `]
})
export class DynamicComponent {
}
