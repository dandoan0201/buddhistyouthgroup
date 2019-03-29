import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ChartsModule } from 'ng2-charts';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NeedAuthGuard } from '../app/auth.guard';
import { LoginComponent } from './login/login.component';


import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { OanhVuComponent } from './oanhvu/oanhvu.component';
import { AdminHomeComponent } from './adminHome/adminHome.component';
import { PDFViewerComponent } from './pdfViewer/pdfViewer.component';
import { PDFViewerSyllabusComponent } from './pdfViewer/pdfViewer-syllabus.component';
import { CanhMemComponent } from './canhMem/canhMem.component';
import { AdminOanhVuComponent } from './adminOanhvu/adminOanhvu.component';
import { AdminPDFViewerComponent } from './adminPdfViewer/adminPdfViewer.component';


import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MissionComponent } from './mission/mission.component';
import { StaffComponent } from './staff/staff.component';
import { GetInvolvedComponent } from './getInvolved/getInvolved.component';
import { BuildYouthGroupComponent } from './buildYouthGroup/buildYouthGroup.component';

import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    OanhVuComponent,
    AdminHomeComponent,
    PDFViewerComponent,
    PDFViewerSyllabusComponent,
    CanhMemComponent,
    AdminOanhVuComponent,
    AdminPDFViewerComponent,

    CounterComponent,
    FetchDataComponent,
    MissionComponent,
    StaffComponent,
    GetInvolvedComponent,
    BuildYouthGroupComponent,
    UploadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    PdfViewerModule,
    ChartsModule,
    LoadingBarHttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'oanhvu', component: OanhVuComponent },
      { path: 'adminHome', component: AdminHomeComponent },
      { path: 'oanhvu/canhmem', component: CanhMemComponent },
      { path: 'adminOanhvu', component: AdminOanhVuComponent },


      { path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'getInvolved', component: GetInvolvedComponent },
      { path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      { path: 'upload', component: UploadComponent },

      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    NeedAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


