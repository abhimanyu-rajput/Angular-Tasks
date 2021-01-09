import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, observable } from 'rxjs';
import { debounceTime, exhaustMap, tap, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { TempdataService } from 'src/app/services/tempdata.service';

@Component({
  selector: 'app-rxjsops',
  templateUrl: './rxjsops.component.html',
  styleUrls: ['./rxjsops.component.css']
})
export class RxjsopsComponent implements OnInit, AfterViewInit {

  @ViewChild('btnGetUsrDtls') public btnGetUsrDtls:ElementRef;
  @ViewChild('SearchByUserName') public SearchByUserName:ElementRef;

  public usersDetails:any;
  public singleUser:any;

  constructor(private _httpserv:HttpserviceService, private _tds: TempdataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // console.log(this.btnGetUsrDtls);
    // Get users details
    fromEvent(this.btnGetUsrDtls.nativeElement,'click')
    .pipe(
      tap(() => {
        this.btnGetUsrDtls.nativeElement.disabled = true;
        this.btnGetUsrDtls.nativeElement.innerText = "Fetching Data...";
      }),
      debounceTime(3000),
      exhaustMap(() => this._httpserv.fatchData()),
      tap(() => {
        this.btnGetUsrDtls.nativeElement.disabled = false;
        this.btnGetUsrDtls.nativeElement.innerText = "Get Users Details";
      })
    )
    .subscribe(res => {
      console.log(res);
      this.usersDetails = res;
    });

    // Get User details by username
    fromEvent(this.SearchByUserName.nativeElement,'keyup')
    .pipe(
      map(res => {return res['target'].value}),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((res:string) => this._httpserv.fatchUserData(res))
    )
    .subscribe(res => {
      this.singleUser = res;
      console.log(res);
    })

  }

}//End
