import { Component } from '@angular/core';
import {InputText} from 'primeng/primeng'

@Component({
  moduleId: module.id,
  selector: 'angular-cli-primeng-app',
  templateUrl: 'angular-cli-primeng.component.html',
  styleUrls: ['angular-cli-primeng.component.css'],
  directives: [InputText]
})
export class AngularCliPrimengAppComponent {
  title = 'angular-cli-primeng works!';
}
