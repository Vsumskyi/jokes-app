import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule {}
