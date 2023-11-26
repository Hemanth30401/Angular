import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PromisesComponent } from './components/promises/promises.component';
import { SibilingComponent } from './components/sibiling/sibiling.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { adminAccessGuard } from './guards/admin-access.guard';
import { UserComponent } from './modules/user/user.component';
import { TDFComponent } from './components/Template-Driven-Form/tdf.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { FormappComponent } from './components/formapp/formapp.component';
import { LoginComponent } from './components/login/login.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ChildComponent } from './components/child/child.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FindFilterComponent } from './components/find-filter/find-filter.component';
import { RestCountriesComponent } from './components/rest-countries/rest-countries.component';
import { AllLinksComponent } from './components/all-links/all-links.component';
import { CapitalsComponent } from './components/capitals/capitals.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PopulationsComponent } from './components/populations/populations.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { TimezonesComponent } from './components/timezones/timezones.component';
import { HomesComponent } from './components/homes/homes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'homes',
    pathMatch:'full'
  },
  {
    path:'all-links',
    component:AllLinksComponent
  },
  {
    path:'homes',
    component:HomesComponent
  },
  {
    path:'rest-countries',
    component:RestCountriesComponent
  },
  {
    path:'capitals',
    component:CapitalsComponent
  },
  {
    path:'locations',
    component:LocationsComponent
  },
  {
    path:'populations',
    component:PopulationsComponent
  },
  {
    path:'continents',
    component:ContinentsComponent
  },
  {
    path:'time-zones',
    component:TimezonesComponent
  },
  {
    path:'findfil',
    component:FindFilterComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'reactive-forms',
    component:ReactiveFormsComponent
  },
  {
    path:'formsapp',
    component:FormappComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  // {
  //   path:'app',
  //   component:AppComponent
  // },
  {
    path:'home',
    component:  HomeComponent
  },
  // {
  //   path:'event-binding',
  //   component: EventBindingComponent
  // },
  {
    path:'courses',
    component: CoursesComponent
  },
  {
    path:'selected-course/:id/:name',
    component: SelectedCourseComponent,
    children:
    [
      {
      path:"courseduration",
      component: CourseDurationComponent
      }
    ]
  },
  {
    path:'asyncpipe',
    component:AsyncPipeComponent
  },
  {
    path:"tdf",
    component:TDFComponent
  },
  {
    path:'directive',
    component: DirectivesComponent
  },
  {
    path:'course-details',
    component: CourseDetailsComponent
  },
  {
    path:'promises',
    component: PromisesComponent
  },
  {
    path:'sibiling',
    component:SibilingComponent
  },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {
    path:'userAccess',
    component:UserComponent,
    canActivate:[adminAccessGuard]
    // canActivateChild:[adminAccessGuard],
    // canDeactivate:[adminAccessGuard]
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
