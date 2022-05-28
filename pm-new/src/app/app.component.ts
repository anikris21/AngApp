import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template: `<div> <h1> {{pageTitle}} </h1>
                <div> my first app </div>
              </div>
  `,
})
export class AppComponent {
  pageTitle = 'pm-new(Product management)';
}
