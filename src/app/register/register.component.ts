import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from './user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }
  public user: User;
  ngOnInit(){
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
  }
  } 
  goSocial(reg){
     //Service call will be here 
     console.log("This reg should be saved by service url :::::::",reg);

     if(localStorage.getItem('newUser')==null){
       let list:string[]=[];
       list.push(reg);
       localStorage.setItem('newUser',JSON.stringify(list));
     }
     else{
      
     }
     
    this.router.navigate(['socialDetails']);
  }

}
