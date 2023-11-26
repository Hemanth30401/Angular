import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { TwoWayTemplateComponent } from './components/two-way-template/two-way-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesServiceService } from './services/courses-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromisesComponent } from './components/promises/promises.component';
import { SibilingComponent } from './components/sibiling/sibiling.component';
import { DataService } from './services/data.service';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { PromisesService } from './services/promises.service';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { TDFComponent } from './components/Template-Driven-Form/tdf.component';
import { ProductsService } from './services/products.service';
import { SquarePipe } from './pipes/square.pipe';
import { AttributeDirective } from './directives/attribute.directive';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { adminAccessGuard } from './guards/admin-access.guard';
import { FormappComponent } from './components/formapp/formapp.component';
import { LoginComponent } from './components/login/login.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { InterceptorChangeInterceptor } from './interceptors/interceptor-change.interceptor';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    TwoWayTemplateComponent,
    StyleBindingComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    CoursesComponent,
    PromisesComponent,
    CourseDetailsComponent,
    SibilingComponent,
    SelectedCourseComponent,
    CourseDurationComponent,
    TDFComponent,
    SquarePipe,
    AttributeDirective,
    AsyncPipeComponent,
    ReactiveFormsComponent,
    FormappComponent,
    LoginComponent,
    PipeComponent,
    SubjectComponent,
    FindFilterComponent,
    RestCountriesComponent,
    AllLinksComponent,
    CapitalsComponent,
    LocationsComponent,
    PopulationsComponent,
    ContinentsComponent,
    TimezonesComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CoursesServiceService,
              DataService,
              PromisesService,
            ProductsService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorChangeInterceptor,
            multi: true
          }
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
