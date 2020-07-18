import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
