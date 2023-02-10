import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxStripeModule } from 'ngx-stripe';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot("pk_test_nDR7IWEIGLp4a1SBtqKH5eyg")
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
