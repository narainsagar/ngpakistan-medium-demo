import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LoggerService } from './shared/logger/logger.service';
import { CustomHttpInterceptorService } from './shared/custom-http-interceptor/custom-http-interceptor.service';
import { FeedService } from './shared/feed/feed.service';
import { ArticleComponent } from './shared/article/article.component';
import { ContainerComponent } from './container/container.component';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ArticleComponent,
    ContainerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    LoggerService,
    FeedService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
