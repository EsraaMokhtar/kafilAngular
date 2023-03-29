import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  // email: string;
  // password: string;

  // constructor( private US:UserService){

  // }


  //   signUp() {
  //   this.US.SignUp(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  //   }

  //   signIn() {
  //   this.US.SignIn(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  //   }

  //   signOut() {
  //   this.US.SignOut();
  //   }

}