import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component',
  templateUrl: 'component.component.html',
  styleUrls: ['component.component.css'],
})
export class AppComponent {
  @Input()
  heading: string = 'Test'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
