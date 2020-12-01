import {BrowserModule} from '@angular/platform-browser';
import {AngularMaterialModule} from './angular-material.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterComponent} from './components/register/register.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LoginServiceService} from './service/login-service.service';
import {RegisterService} from './service/register.service';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent
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
        HttpClientModule,
        MatDialogModule,

    ],
  providers: [LoginServiceService, RegisterService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
