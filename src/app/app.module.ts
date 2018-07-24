import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './lib/components/components.module';
import { NavComponent } from './lib/components/nav/nav.component';
import { TitleComponent } from './lib/components/nav/title.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './lib/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { OperationsComponent } from './views/operations/operations.component';
import { OperationsModule } from './views/operations/operations.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    OperationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent, NotFoundComponent]
})
export class AppModule { }
