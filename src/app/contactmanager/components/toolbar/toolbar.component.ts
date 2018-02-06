import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
@Output() toggleSideNav = new EventEmitter<void>();
@Output() toggleTheme = new EventEmitter<void>();

  constructor(private dalog: MatDialog) { }

  ngOnInit() {
  }

  openAddEmployeeDialog(): void { 
    this.dalog.open(NewContactDialogComponent, { width : '450px' });

    // dialogRef.afterClosed().subscribe(result=> {
    //   console.log('dialog was closed',result);
    // });
  }

}
