import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QRCodeModule} from 'angular2-qrcode';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {ProfileComponent} from './profile/profile.component';
import {TimeFromNowPipe} from './time-from-now.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    ProfileComponent,
    TimeFromNowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent],
  exports: [TimeFromNowPipe]
})
export class AppModule {
}
