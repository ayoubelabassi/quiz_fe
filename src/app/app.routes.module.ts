import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { PassageComponent } from './pages/passage/passage-component';
import { ResultComponent } from './pages/result/result.component';
import { ResultsComponent } from './pages/results/results.component';


const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'home', component: HomeComponent },
    { path: 'passage', component: PassageComponent },
    { path: 'result', component: ResultComponent },
    { path: 'results', component: ResultsComponent },
    { path: '**', redirectTo: '' }
  ];
  
  export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routing);
  
  export default AppRoutes;