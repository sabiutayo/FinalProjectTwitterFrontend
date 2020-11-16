import {BrowserModule} from '@angular/platform-browser';
import {AngularMaterialModule} from './angular-material.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { BioComponent } from './components/bio/bio.component';
import { AddTweetComponent } from './components/add-tweet/add-tweet.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
import { SearchComponent } from './components/search/search.component';
import { MeComponent } from './components/me/me.component';
import { OthersComponent } from './components/others/others.component';
import { ShellComponent } from './components/shell/shell.component';
import { ErrorInterceptorService } from './service/error-interceptor.service';
import { SearchTweetsComponent } from './components/search-tweets/search-tweets.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LoginService} from './service/login.service';
import {RegisterService} from './service/register.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TweetComponent,
    BioComponent,
    AddTweetComponent,
    FeedsComponent,
    MyTweetsComponent,
    SearchComponent,
    MeComponent,
    OthersComponent,
    ShellComponent,
    SearchTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    LoginService, RegisterService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
