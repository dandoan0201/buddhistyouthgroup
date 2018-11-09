import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ChartsModule } from 'ng2-charts';

import { NeedAuthGuard } from '../app/auth.guard';
import { LoginComponent } from './login/login.component';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MissionComponent } from './mission/mission.component';
import { StaffComponent } from './staff/staff.component';
import { GetInvolvedComponent } from './getInvolved/getInvolved.component';


import { SeattleGDPTLieuQuanNavBarComponent } from './Seattle-GDPTLieuQuan/navBar/navBar.component';
import { BuildYouthGroupComponent } from './buildYouthGroup/buildYouthGroup.component';
import { SeattleGDPTLieuQuanHomeComponent } from './Seattle-GDPTLieuQuan/home/home.component';
import { SeattleGDPTLieuQuanOanhVuComponent } from './Seattle-GDPTLieuQuan/oanhvu/oanhvu.component';
import { SeattleGDPTLieuQuanCanhMemComponent } from './Seattle-GDPTLieuQuan/canhMem/canhMem.component';



import { PDFViewerComponent } from './Seattle-GDPTLieuQuan/pdfViewer/pdfViewer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MissionComponent,
    StaffComponent,
    GetInvolvedComponent,
    BuildYouthGroupComponent,


    SeattleGDPTLieuQuanNavBarComponent,
    SeattleGDPTLieuQuanHomeComponent,
    SeattleGDPTLieuQuanOanhVuComponent,
    SeattleGDPTLieuQuanCanhMemComponent,
    PDFViewerComponent,
    



    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    PdfViewerModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'getInvolved', component: GetInvolvedComponent },
      { path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      { path: '', component: NavMenuComponent, outlet: "NavBar" },


      { path: 'gdptlieuquan', component: SeattleGDPTLieuQuanNavBarComponent, outlet: "NavBar" },
      { path: 'gdptlieuquan', component: SeattleGDPTLieuQuanHomeComponent },
      { path: 'gdptlieuquan/oanhvu', component: SeattleGDPTLieuQuanOanhVuComponent },
      { path: 'gdptlieuquan/oanhvu/canhmem', component: SeattleGDPTLieuQuanCanhMemComponent },



      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


