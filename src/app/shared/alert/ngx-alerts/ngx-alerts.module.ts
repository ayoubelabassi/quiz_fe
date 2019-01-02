import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxAlertsService} from './services/ngx-alerts.service';
import {NgxAlertTemplatesComponent} from './components/ngx-alert-templates.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from './../ngx-snotify';

const components = [NgxAlertTemplatesComponent];

@NgModule({
  imports: [CommonModule, SnotifyModule],
  declarations: [...components],
  exports: [...components],
})
export class NgxAlertsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAlertsModule,
      providers: [{provide: 'SnotifyToastConfig', useValue: ToastDefaults}, SnotifyService, NgxAlertsService],
    };
  }
}
