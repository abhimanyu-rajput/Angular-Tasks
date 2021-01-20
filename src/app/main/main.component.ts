import { Component, OnInit } from '@angular/core';
import { TempdataService } from '../services/tempdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public tds: TempdataService) { }

  ngOnInit(): void {
  }

}
