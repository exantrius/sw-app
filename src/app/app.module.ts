import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceModule } from '@app/service/service_module';
import { SharedComponentsModule } from '@app/components/shared/shared_components_module';
import { IndexPageModule } from '@app/components/index_page/index_page_module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule,
    SharedComponentsModule,
    IndexPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
