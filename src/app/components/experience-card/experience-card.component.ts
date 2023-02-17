import { Component, Input } from '@angular/core'

@Component({
  selector: 'experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.css'],
})
export class ExperienceCard {
  @Input()
  position: boolean = true
  @Input()
  period: string = 'JAN 2023 - PRESENT'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  image_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  image_src: string = '/playground_assets/b23r9bzf_400x400-200h.jpg'

  constructor() {}
}
