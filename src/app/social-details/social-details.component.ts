import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.css']
})
export class SocialDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goPersonal(social){
    //Service call will be here 
    console.log("This social should be saved by service url :::::::",social);
    this.router.navigate(['personalDetails'])
  }
  gorRegister(){
    this.router.navigate([''])

  }

}
