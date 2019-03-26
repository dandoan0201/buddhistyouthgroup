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

import { HomeLayoutComponent } from './layouts/home-layout.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { OanhVuComponent } from './oanhvu/oanhvu.component';
import { AdminHomeComponent } from './adminHome/adminHome.component';
import { PDFViewerComponent } from './pdfViewer/pdfViewer.component';
import { PDFViewerSyllabusComponent } from './pdfViewer/pdfViewer-syllabus.component';
import { CanhMemComponent } from './canhMem/canhMem.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MissionComponent } from './mission/mission.component';
import { StaffComponent } from './staff/staff.component';
import { GetInvolvedComponent } from './getInvolved/getInvolved.component';
import { BuildYouthGroupComponent } from './buildYouthGroup/buildYouthGroup.component';

import { SeattleGDPTLieuQuanNeedAuthGuard } from './Seattle-GDPTLieuQuan/Seattle-GDPTLieuQuan-auth.guard';
import { SeattleGDPTLieuQuanHomeLayoutComponent } from './layouts/gdptlieuquan-layout.component';
import { SeattleGDPTLieuQuanNavBarComponent } from './Seattle-GDPTLieuQuan/navBar/navBar.component';
import { SeattleGDPTLieuQuanHomeComponent } from './Seattle-GDPTLieuQuan/home/home.component';
import { SeattleGDPTLieuQuanOanhVuComponent } from './Seattle-GDPTLieuQuan/oanhvu/oanhvu.component';
import { SeattleGDPTLieuQuanCanhMemComponent } from './Seattle-GDPTLieuQuan/canhMem/canhMem.component';
import { SeattleGDPTLieuQuanAdminHomeComponent } from './Seattle-GDPTLieuQuan/adminHome/adminHome.component';


//import { PDFViewerComponent } from './Seattle-GDPTLieuQuan/pdfViewer/pdfViewer.component';
//import { PDFViewerSyllabusComponent } from './Seattle-GDPTLieuQuan/pdfViewer/pdfViewer-syllabus.component';



@NgModule({
  declarations: [
    AppComponent,

    HomeLayoutComponent,
    NavMenuComponent,
    HomeComponent,
    OanhVuComponent,
    AdminHomeComponent,
    PDFViewerComponent,
    PDFViewerSyllabusComponent,
    CanhMemComponent,
    CounterComponent,
    FetchDataComponent,
    MissionComponent,
    StaffComponent,
    GetInvolvedComponent,
    BuildYouthGroupComponent,


    SeattleGDPTLieuQuanHomeLayoutComponent,
    SeattleGDPTLieuQuanNavBarComponent,
    SeattleGDPTLieuQuanHomeComponent,
    SeattleGDPTLieuQuanOanhVuComponent,
    SeattleGDPTLieuQuanCanhMemComponent,
    SeattleGDPTLieuQuanAdminHomeComponent,

    //PDFViewerComponent,
    //PDFViewerSyllabusComponent,
    
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
      { path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'getInvolved', component: GetInvolvedComponent },
      { path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      //{
      //  path: '', component: HomeLayoutComponent, children: [
      //    { path: '', component: HomeComponent },
      //    { path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      //    { path: 'fetch-data', component: FetchDataComponent },
      //    { path: 'mission', component: MissionComponent },
      //    { path: 'staff', component: StaffComponent },
      //    { path: 'getInvolved', component: GetInvolvedComponent },
      //    { path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      //  ]
      //},
      //{
      //  path: 'gdptlieuquan', component: SeattleGDPTLieuQuanHomeLayoutComponent, children: [
      //    { path: '', component: SeattleGDPTLieuQuanHomeComponent },
      //    { path: 'oanhvu', component: SeattleGDPTLieuQuanOanhVuComponent },
      //    { path: 'oanhvu/canhmem', component: SeattleGDPTLieuQuanCanhMemComponent },
      //    { path: 'adminHome', component: SeattleGDPTLieuQuanAdminHomeComponent, canActivate: [SeattleGDPTLieuQuanNeedAuthGuard] },
      //  ]
      //},

      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      //{ path: 'fetch-data', component: FetchDataComponent },
      //{ path: 'mission', component: MissionComponent },
      //{ path: 'staff', component: StaffComponent },
      //{ path: 'getInvolved', component: GetInvolvedComponent },
      //{ path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      //{ path: '', component: NavMenuComponent, outlet: "NavBar" },


      //{ path: 'gdptlieuquan', component: SeattleGDPTLieuQuanNavBarComponent, outlet: "NavBar" },
      //{ path: 'gdptlieuquan', component: SeattleGDPTLieuQuanHomeComponent },
      //{ path: 'gdptlieuquan/oanhvu', component: SeattleGDPTLieuQuanOanhVuComponent },
      //{ path: 'gdptlieuquan/oanhvu/canhmem', component: SeattleGDPTLieuQuanCanhMemComponent },



      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    NeedAuthGuard,
    SeattleGDPTLieuQuanNeedAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


