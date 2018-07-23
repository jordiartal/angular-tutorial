import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './lib/components/components.module';
import { NavComponent } from './lib/components/nav/nav.component';
import { TitleComponent } from './lib/components/nav/title.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './lib/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
