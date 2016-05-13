import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularCliPrimengAppComponent } from '../app/angular-cli-primeng.component';

beforeEachProviders(() => [AngularCliPrimengAppComponent]);

describe('App: AngularCliPrimeng', () => {
  it('should create the app',
      inject([AngularCliPrimengAppComponent], (app: AngularCliPrimengAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-cli-primeng works!\'',
      inject([AngularCliPrimengAppComponent], (app: AngularCliPrimengAppComponent) => {
    expect(app.title).toEqual('angular-cli-primeng works!');
  }));
});
