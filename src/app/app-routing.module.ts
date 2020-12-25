import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './room/lights/light/light.component';
import { RoomComponent } from './room/room.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: "", component: DashboardComponent, pathMatch: "full"},
  {path: "settings", component: SettingsComponent},
  {path: "light", component: LightComponent},
  {path: "room", component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
