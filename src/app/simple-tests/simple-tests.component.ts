import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baj-simple-tests',
  templateUrl: './simple-tests.component.html'
})
export class SimpleTestsComponent {
  title = 'A simple title';

  changeTitle(): void {
    this.title = 'Another simple title';
  }
}
