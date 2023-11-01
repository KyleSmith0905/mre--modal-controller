import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<p>Hello World</p>`,
  styles: [`
p {
  color: red;
  font-size: 1.2rem;
}
  `],
  standalone: true,
})
export class ModalComponent {}
