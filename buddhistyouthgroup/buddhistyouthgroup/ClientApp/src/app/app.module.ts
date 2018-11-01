import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { BuildYouthGroupComponent } from './buildYouthGroup/buildYouthGroup.component';
import { SeattleGDPTLieuQuanHomeComponent } from './Seattle-GDPTLieuQuan/home/home.component';

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
    SeattleGDPTLieuQuanHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent, canActivate: [NeedAuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'getInvolved', component: GetInvolvedComponent },
      { path: 'buildYouthGroup', component: BuildYouthGroupComponent },
      { path: 'gdptlieuquan', component: SeattleGDPTLieuQuanHomeComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
