import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  
  // email: string;
  // password: string;

  userFormGroup: FormGroup;

  constructor( private US:UserService , private formBuilder: FormBuilder){
    this.userFormGroup=this.formBuilder.group({
      // fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      // mobileNo:formBuilder.array([formBuilder.control('')],[Validators.required ]),
      // address:this.formBuilder.group({
      //   city:['',[Validators.required]],
      //   PostalCode:['',[Validators.required]],
      //   street:['',[Validators.required]]
      // }),
      password:['',[Validators.required ,Validators.minLength(6)]],
      // rePassword:['',[Validators.required ,Validators.minLength(6)]]
    })

  
  }


  // get fullName(){
  
  //   return this.userFormGroup.get('fullName');
  // }
  
  get email(){
    return this.userFormGroup.get('email');
  }
  
  
  // get mobileNo(){
  //   return this.userFormGroup.get('mobileNo') as FormArray;
  // }
  
  
  // get address(){
  //   return this.userFormGroup.get('address');
  // }
  
  // get city(){
  //   return this.address?.get('city');
  // }
  
  // get PostalCode(){
  //   return this.address?.get('PostalCode');
  // }
  
  
  // get street(){
  //   return this.address?.get('street');
  // }
  
  get password(){
    return this.userFormGroup.get('password');
  }
  
  // get rePassword(){
  //   return this.userFormGroup.get('rePassword');
  // }
  
  
  // addMobile(){                                                                                        
  //   this.mobileNo.push(this.formBuilder.control(''));
  // }
  
  
  // DeletMobile(index: number){     
  //   this.mobileNo.controls.splice(index, 1);                                                                          
  // }
  

    // signUp() {
    // this.US.SignUp(this.userFormGroup.value);
    // this.email = '';
    // this.password = '';
    // }

    // signUp() {
    //   this.US.SignUp(this.email, this.password);
    //   this.email = '';
    //   this.password = '';
    //   }

    // signIn() {
    // this.US.SignIn(this.email, this.password);
    // this.email = '';
    // this.password = '';
    // }

    // signOut() {
    // this.US.SignOut();
    // }
}


