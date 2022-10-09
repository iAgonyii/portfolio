import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SkillCardIcon } from './skill-card-icon/skill-card-icon.component'
import { SkillCardImage } from './skill-card-image/skill-card-image.component'
import { AppComponent } from './component/component.component'
import { ExperienceCard } from './experience-card/experience-card.component'

@NgModule({
  declarations: [SkillCardIcon, SkillCardImage, AppComponent, ExperienceCard],
  imports: [CommonModule, RouterModule],
  exports: [SkillCardIcon, SkillCardImage, AppComponent, ExperienceCard],
})
export class ComponentsModule {}
