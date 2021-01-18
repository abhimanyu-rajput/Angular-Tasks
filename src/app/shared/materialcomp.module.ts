import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [MatProgressBarModule, MatButtonModule],
    exports: [MatProgressBarModule, MatButtonModule]
})

export class MaterialcompModule {}