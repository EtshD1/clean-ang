import { NgModule } from '@angular/core';
import { environment } from '@data/environment';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DataModule } from '@data/data.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, DataModule],
  providers: [{ provide: 'API_URL', useValue: environment.API_URL }],
  bootstrap: [AppComponent],
})
export class AppModule {}
