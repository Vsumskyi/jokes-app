import { SharedModule } from './shared/shared.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FavoritesModule } from './pages/favorites/favorites.module'
import { HomeModule } from './pages/home/home.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavoritesModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
