import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>Hello World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles : [''] to add the inline css if we want to add
})
export class AppComponent {
  name = 'ashish';
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  cost = 2200;
  temperature = 22.522;
  getName() {
    return this.name;
  }
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event);
  }
}
