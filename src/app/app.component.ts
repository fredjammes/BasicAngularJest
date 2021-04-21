import { Component } from '@angular/core';

@Component({
  selector: 'baj-root',
  template: `
    <baj-simple-tests></baj-simple-tests>
    <baj-asynchronous-tests></baj-asynchronous-tests>
  `,
  styles: []
})
export class AppComponent {
}
