import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import userProviders from './repositories/user/providers';

@NgModule({
  providers: [...userProviders],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
