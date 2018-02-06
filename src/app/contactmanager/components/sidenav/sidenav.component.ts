import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

const BREAKPOINT_720 = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

 @ViewChild('sidenav') sidenav: MatSidenav;

 private mediaMatcher : MediaQueryList = matchMedia('(max-width: ${BREAKPOINT_720}px)');

 users: Observable<User[]>; 
 isDarkTheme: boolean = false;

constructor(zone: NgZone, private userService : UserService, private router: Router){
  this.mediaMatcher.addListener(mql => zone.run(()=> this.mediaMatcher = mql));
}

  close() {
    this.sidenav.close();
  }

toggleTheme() { 
  this.isDarkTheme = !this.isDarkTheme; 
}

  ngOnInit(){ 
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => { 
        if(data.length > 0) 
        this.router.navigate(['/contactmanager',data[0].id]);
    })
  }
  
  isScreen720(): boolean {
    return this.mediaMatcher.matches;
  }
}
