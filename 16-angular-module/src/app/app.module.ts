import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouteModule } from './route.module';
import { HomeComponent } from './home/home.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core.module';
import { AuthModule } from './login/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouteModule,
    DashboardModule,
    CoreModule,
    AuthModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
