import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  exports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule
  ]
})
export class MaterialModule {}
