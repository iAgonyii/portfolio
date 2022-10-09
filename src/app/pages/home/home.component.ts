import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawwybc: string = ' '

  constructor(private title: Title, private meta: Meta, private toastr: ToastrService) {
    this.title.setTitle('0xAgony')
    this.meta.addTags([
      {
        name: 'description',
        content:
          '0xAgony web3 portfolio - Security & Software Engineer - Developer - Trader - Founder',
      },
      {
        property: 'og:title',
        content: '0xAgony',
      },
      {
        property: 'og:description',
        content:
          '0xAgony web3 portfolio - Security & Software Engineer - Developer - Trader - Founder',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/baaa3ed1-6b3c-4378-bbe6-8a1e9855038f/a117659b-8dcd-48a1-a207-8b9d807062c6?org_if_sml=1',
      },
    ])
  }

  copyToClipboard(value, type) {
    navigator.clipboard.writeText(value).then(r => this.toast('Copied ' + type + ' to clipboard!'));
  }

  toast(message) {
    this.toastr.success(message);
  }

}
