import { Component, Input } from '@angular/core'

@Component({
  selector: 'skill-card-icon',
  templateUrl: 'skill-card-icon.component.html',
  styleUrls: ['skill-card-icon.component.css'],
})
export class SkillCardIcon {
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
