import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { EqualValidator } from './equal-validator.directive';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SocialDetailsComponent } from './social-details/social-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { Route } from '@angular/router/src/config';
const routes:Routes=[
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'socialDetails',
    component:SocialDetailsComponent
  },
  {
    path:'personalDetails',
    component:PersonalDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SocialDetailsComponent,
    PersonalDetailsComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
