import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goSocial(){
    this.router.navigate(['socialDetails']);
  }
  save(data){
    //Service call will be here 
    console.log("This data should be saved by  service url :::::::",data);

  }

}
