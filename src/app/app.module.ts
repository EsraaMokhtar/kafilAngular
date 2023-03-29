import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { environment } from '../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


// 

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import {  UserService } from './services/user.service';
// 
import { ProjectsDetailsComponent } from './component/projectsDetails/projectsDetails.component';
import { ContestsComponent } from './component/contests/contests.component';
import { HomePageComponent } from './component/homePage/home-page/home-page.component';
import { FreelancersComponent } from './component/freelancers/freelancers/freelancers.component';



import { UserRegisterComponent } from './component/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsDetailsComponent,
    ContestsComponent,
    HomePageComponent,
    FreelancersComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    // AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule 

 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
