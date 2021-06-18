import { Component, OnInit } from '@angular/core';
import { MailerService } from 'src/app/mailer.service';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  projectList!: any[];

  constructor(private _service: ProjectService, private _serviceMail: MailerService) { }

  ngOnInit(): void {
    this._service.GetAllProjectByUser().subscribe(result => {
      this.projectList = result;
      console.log(result);
    })
  }

  sendInvitation(){
    this._serviceMail.InviteUser(????????).subscribe(result => {
      console.log("Invitation envoyée");
    })
  }

  deleteProject(projectId: number){
    console.log(projectId);
    var box = confirm('Do you want to delete?');
    console.log(projectId);
    if(box){
      this._service.DeleteProject(projectId).subscribe(result=>{
        console.log(projectId);
        
        console.log("Delete with success");   
        this.projectList = this.projectList;   
      }, error => {
        alert(error.message)
      });
    }
  }

}
