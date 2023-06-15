import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { routes } from './routes';

//  modules
import { CoreModule } from '@frontend/core';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
