import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router'
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import {FormsModule} from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes : Routes = [
  {path: '', component: ContactmanagerAppComponent,
   children:[ 
     { path:':id',component: MainContentComponent }, 
     { path:'',component: MainContentComponent } 
     ]
},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  providers:[UserService],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NewContactDialogComponent, LineChartComponent],
  entryComponents: [NewContactDialogComponent]
})
export class ContactmanagerModule { }
