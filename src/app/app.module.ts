import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes,RouterModule } from '@angular/router'

import { AppComponent } from './app.component';


const routes : Routes = [
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: '**', redirectTo: 'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
