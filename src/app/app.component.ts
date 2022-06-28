import '@refinitiv-ui/elements/number-field';
import '@refinitiv-ui/elements/number-field/themes/halo/light';

import '@refinitiv-ui/halo-theme/light/imports/native-elements';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  form = new FormGroup({
    count: new FormControl('2')
  })
}
