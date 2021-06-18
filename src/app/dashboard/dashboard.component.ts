import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '@cds/core/icon/register.js';
import { ClarityIcons, logoutIcon } from '@cds/core/icon';
import { ProjectService } from '../project.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isModalVisible = false;
  addProjectForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(private router: Router, private _service: ProjectService) { }

  ngOnInit(): void {
    ClarityIcons.addIcons(logoutIcon);
  }

  addProject(){
    this._service.AddProject(this.addProjectForm.value).subscribe(result =>{
      console.log("Add with success");  
    }, error => {
      alert(error.message)
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/authentification/login');
  }

}
