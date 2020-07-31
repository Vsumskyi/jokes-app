import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateJokePageComponent } from './create-joke-page/create-joke-page.component';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [CreateJokePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PdfViewerModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateJokePageComponent,
        canActivate: [AdminGuard]
      }
    ])
  ],
  providers: [AdminGuard]
})
export class CreateJokeModule {}
