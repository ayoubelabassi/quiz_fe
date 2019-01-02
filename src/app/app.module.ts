import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';
import { AppRoutes } from './app.routes.module';
import { FormsModule } from '@angular/forms';
import { AnimatorModule } from 'css-animator';
import { NgbModal, NgbModule } from './@theme/ngb-bootstrap';
import { HttpService } from './core/http.service';
import { NgxAlertsModule } from './shared/alert/ngx-alerts';
import { QuizService } from './core/quiz.service';
import { PassageComponent } from './pages/passage/passage-component';

import { ResultComponent } from './pages/result/result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AnimatorModule,
    NgbModule,
    NgxAlertsModule.forRoot(),
    HttpClientModule,
    StorageServiceModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    PassageComponent,
    ResultComponent,
    ResultsComponent,
  ],
  providers: [
    HttpService,
    QuizService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
