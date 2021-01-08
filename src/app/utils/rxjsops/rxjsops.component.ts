import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, exhaustMap, tap } from 'rxjs/operators';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { TempdataService } from 'src/app/services/tempdata.service';

@Component({
  selector: 'app-rxjsops',
  templateUrl: './rxjsops.component.html',
  styleUrls: ['./rxjsops.component.css']
})
export class RxjsopsComponent implements OnInit, AfterViewInit {

  @ViewChild('btnGetUsrDtls') public btnGetUsrDtls:ElementRef;

  public usersDetails:any;
  // public searchUser:any;

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
        this.btnGetUsrDtls.nativeElement.innerText = "Loading...";
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

  }

}//End
