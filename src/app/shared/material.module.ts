import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  exports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
