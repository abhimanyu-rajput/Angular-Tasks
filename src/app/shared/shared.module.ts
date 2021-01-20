import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FilterPipe } from '../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialcompModule } from './materialcomp.module';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [FilterPipe],
  imports: [
    MaterialcompModule,
    CommonModule, FormsModule, FlexLayoutModule,
    FontAwesomeModule 
  ],
  exports: [MaterialcompModule, FontAwesomeModule, FormsModule,FilterPipe, FlexLayoutModule]
})
export class SharedModule { 

  constructor(private iconLib: FaIconLibrary) {
    iconLib.addIconPacks(fas);
    iconLib.addIconPacks(far);
    iconLib.addIconPacks(fab);
  }

}
