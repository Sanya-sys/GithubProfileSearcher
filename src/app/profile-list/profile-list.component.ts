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
count=1;
notscrolly=true;
notEmptyPost=true;
modalRef: BsModalRef;
title:any

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
    this.profileservice.getData(this.users).subscribe((data:any)=>
      {
        this.searchdata=data.items;
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


  onScroll(){
    if(this.notscrolly && this.notEmptyPost){
          this.notscrolly=false;
          console.log("scrolled");
          this.loadNextPost();
    }
  }
 loadNextPost(){

     //const lastPost = this.userData[this.userData.length - 1];
     this.count=this.count+1; 
     this.profileservice.getnextpage(this.users,this.count).subscribe((result:any )=>{
       const newPost = result;
       console.log(newPost);
       if(newPost.length == 0 ){
         this.notEmptyPost=false;
       }
       Array.prototype.push.apply(this.searchdata,newPost.items);
       console.log(this.searchdata,newPost.items);
      
       this.notscrolly=true;
     });

 }
     
  

}
