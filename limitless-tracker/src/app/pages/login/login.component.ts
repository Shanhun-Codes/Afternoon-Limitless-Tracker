import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router)
  isAuth = false
  username = '';
  password = '';

  login() {
   let isLoggedIn = this.authService.login(this.username, this.password).subscribe((authStatus) => {
     this.isAuth = authStatus
     console.log(this.isAuth);

     if (authStatus) {
      this.router.navigate(['/dashboard'])
     } else {
      alert("Invalid Username or Password")
     }
   })
  

   
  }
}
