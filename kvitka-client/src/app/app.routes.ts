import {Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component'
import {EventPageComponent} from "./event-page/event-page.component";
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {ChatPageComponent} from "./chat-page/chat-page.component";
import {EventsPageComponent} from "./events-page/events-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'event', component: EventPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'auth', component: AuthPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'chat', component: ChatPageComponent}
];
