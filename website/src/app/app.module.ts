import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { EarlyStateAverageComponent } from './early-state-average/early-state-average.component';
import { VoterCompositionComponent } from './voter-composition/voter-composition.component';

@NgModule({
  declarations: [
    AppComponent,
    EarlyStateAverageComponent,
    VoterCompositionComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
