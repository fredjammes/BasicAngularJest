import { Component } from '@angular/core';

@Component({
  selector: 'baj-simple-tests',
  templateUrl: './simple-tests.component.html',
  styleUrls: ['simple-tests.component.scss']
})
export class SimpleTestsComponent {
  title = 'A simple title';
  isFirstSwitchOn = false;
  isSecondSwitchOn = false;

  get isReadyToGo(): boolean {
    return this.isFirstSwitchOn && this.isSecondSwitchOn;
  }

  changeTitle(): void {
    this.title = 'Another simple title';
  }

  toggleFirstSwitch(): void {
    this.isFirstSwitchOn = !this.isFirstSwitchOn;
  }

  toggleSecondSwitch(): void {
    this.isSecondSwitchOn = !this.isSecondSwitchOn;
  }
}
