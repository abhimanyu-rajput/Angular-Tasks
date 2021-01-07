import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule, MatButtonModule
  ],
  exports: [MatButtonModule, FontAwesomeModule]
})
export class SharedModule { 

  constructor(private iconLib: FaIconLibrary) {
    iconLib.addIconPacks(fas);
    iconLib.addIconPacks(far);
    iconLib.addIconPacks(fab);
  }

}
