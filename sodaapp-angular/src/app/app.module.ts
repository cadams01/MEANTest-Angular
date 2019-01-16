import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SodaService } from './services/soda.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    SodaService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

