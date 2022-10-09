import { Component, Input } from '@angular/core'

@Component({
  selector: 'skill-card-image',
  templateUrl: 'skill-card-image.component.html',
  styleUrls: ['skill-card-image.component.css'],
})
export class SkillCardImage {
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
