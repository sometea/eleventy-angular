import { NgModule } from '@angular/core';
import { INITIAL_CONFIG, ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AbsoluteUrlModule } from './absolute-url.module';

@NgModule({
  imports: [
    AppModule,
    AbsoluteUrlModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
