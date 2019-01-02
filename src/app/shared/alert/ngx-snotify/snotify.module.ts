import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnotifyComponent } from './snotify/snotify.component';
import { ToastComponent } from './snotify/toast/toast.component';
import { SnotifyService } from './snotify/snotify.service';
import { TruncatePipe } from './snotify/pipes/truncate.pipe';
import { ButtonsComponent } from './snotify/toast/button/buttons.component';
import { PromptComponent } from './snotify/toast/prompt/prompt.component';
import { KeysPipe } from './snotify/pipes/keys.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnotifyComponent, ToastComponent, TruncatePipe,
    ButtonsComponent, PromptComponent, KeysPipe
  ],
  exports: [
    SnotifyComponent, TruncatePipe, KeysPipe
  ]
})

export class SnotifyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SnotifyModule,
      providers: [SnotifyService]
    };
  }
}
