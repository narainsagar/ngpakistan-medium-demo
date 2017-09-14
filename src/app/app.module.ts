import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MomentModule } from 'angular2-moment';
import { ToastOptions, ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoggerService } from './shared/services/logger/logger.service';
import { CustomHttpInterceptorService } from './shared/services/custom-http-interceptor/custom-http-interceptor.service';
import { FeedService } from './shared/services/feed/feed.service';
import { UtilService } from './shared/services/util/util.service';
import { ArticleComponent } from './shared/components/article/article.component';
import { SearchComponent } from './home/search/search.component';
import { ContainerComponent } from './home/container/container.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { SortByDatePipe } from './shared/pipes/sortByDate.pipe';
import { FocusResetFieldDirective } from './shared/directives/focus-reset-field/focus-reset-field.directive';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

const toastOptions = <ToastOptions>{
  animate: 'flyRight',
  showCloseButton: true,
  toastLife: 5000 // 5 seconds.
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ArticleComponent,
    ContainerComponent,
    AlertComponent,
    SortByDatePipe,
    FocusResetFieldDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MomentModule,
    ToastModule.forRoot(),
  ],
  providers: [
    UtilService,
    LoggerService,
    FeedService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
