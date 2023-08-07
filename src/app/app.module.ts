import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsMapComponent } from './sl-map/us-map/us-map.component';
import { DrawerTestComponent } from './drawer-test/drawer-test.component';

@NgModule({
  declarations: [
    AppComponent,
    UsMapComponent,
    DrawerTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
