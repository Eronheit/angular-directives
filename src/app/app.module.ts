import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { TesteComponent } from './teste/teste.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    TesteComponent,
    DirectiveNgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
