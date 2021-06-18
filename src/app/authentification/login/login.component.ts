import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    plainPassword: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthServiceService, 
              private router: Router) { }

  loginProcess(){
    console.log('Login process incoming');
    this.authService.login(this.loginForm.value).subscribe(result=> {
        console.log("Login Success");         
        console.log(result);
        localStorage.setItem('token', result); 
        this.router.navigateByUrl('/dashboard/home');   
    }, error => {
      alert('Incorrect username of password. Authentification failed. ');
    }, ()=> {
      // dans tout les cas
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
      this.router.navigateByUrl('/dashboard');
  }
}
