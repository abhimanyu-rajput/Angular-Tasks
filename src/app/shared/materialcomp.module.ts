import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    declarations: [],
    imports: [MatProgressBarModule, MatButtonModule,MatAutocompleteModule,MatToolbarModule,MatIconModule,MatMenuModule],
    exports: [MatProgressBarModule, MatButtonModule,MatAutocompleteModule,MatToolbarModule,MatIconModule,MatMenuModule]
})

export class MaterialcompModule {}