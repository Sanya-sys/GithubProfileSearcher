import { Component, OnInit } from '@angular/core';
import  {ProfileserviceService} from '../profileservice.service';

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
  constructor(private profileservice:ProfileserviceService) { }

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
     
  

}
