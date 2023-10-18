import { Component } from '@angular/core';
import {ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

data:any;

constructor(private srvc:ContactService) {
this.srvc.getContact().subscribe(res=>{
  this.data=res;
})
}
}
