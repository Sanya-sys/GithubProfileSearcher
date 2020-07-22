import { Component, OnInit } from '@angular/core';
import  {ProfileserviceService} from '../profileservice.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
public users:any;
public searchdata:any;
public userFlag=false;
public divFlag=0;
public secondData:any;
currentPage=1;
totalItems=30;
modalRef: BsModalRef;
perPage=3;
page=0;

  constructor(private profileservice:ProfileserviceService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>,user) {
    this.modalRef = this.modalService.show(template);
    this.profileservice.getSecondApi(user).subscribe(data =>
      {
        
        this.secondData=data;
        console.log(this.secondData);
      }

    )
  }

  ngOnInit(): void {
    
  }
  search()
  {
    this.profileservice.getData(this.users).subscribe(data=>
      {
        this.searchdata=data;
      });
      this.userFlag=true;
  }
  setDivFlag()
  {
    this.divFlag=1;
  }
  hightolow(){
    this.profileservice.hightolow();

  }
  lowtohigh(){
    this.profileservice.lowtohigh();
  }
 setPage(event){
    this.page=event;
  }
     
  

}
