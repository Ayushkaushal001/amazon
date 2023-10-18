import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
 data:any;
 constructor(private srvc: UserService){
  this.srvc.getUsers().subscribe(res=>{
    this.data = res;
  })

 }
}
