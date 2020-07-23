import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import {HttpClientModule} from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
