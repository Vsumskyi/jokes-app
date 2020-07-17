import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [MatSelectModule, MatTooltipModule, MatProgressSpinnerModule],
  exports: [MatSelectModule, MatTooltipModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
