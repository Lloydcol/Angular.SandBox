import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    plainPassword: new FormControl("", [Validators.required]),
  });

  constructor(private authService: AuthServiceService) { }

  
  registerProcess(){
  console.log('Register process incoming');
    this.authService.register(this.registerForm.value).subscribe(result=> {
        console.log("Register with Success");         
        alert("Register with Success" + result);
    }, error => {
      alert(error.message)
    });
  }

  
  ngOnInit(): void {
  }
}
