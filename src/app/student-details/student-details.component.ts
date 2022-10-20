import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {AppService} from "../app.service"
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// export interface PeriodicElement {
//   id: number;
//   name: string; 
//   username: string;
//   email:string;
//   phone: number;
// }

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  enable= false;
  storeApi:any
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  constructor(private _appService:  HttpClient) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // this.storeApi.paginator = this.paginator;
  }
  getCNTID(data:any){
    this.enable=true
    console.log(data); 
    if (data === 'users') {
    this._appService.get(environment.apiKey+data).subscribe(res=>{
      // console.log(res);
        this.storeApi= res;
      });
      
      } else{
       alert("please check your ID")
        
      }
    this.storeApi = []
  }
}

 
