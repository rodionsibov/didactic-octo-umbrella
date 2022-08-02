import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchematicsComponent } from './schematics/schematics.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'schematics', component: SchematicsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
