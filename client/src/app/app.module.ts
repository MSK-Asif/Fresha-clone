import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ShopSelectedComponent } from './pages/shop-selected/shop-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecommendedComponent,
    HomeComponent,
    LoginComponent,
    SearchResultComponent,
    ShopSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
