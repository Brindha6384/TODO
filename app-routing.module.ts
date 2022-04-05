import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [

 
  {path:"",component: HomeComponent},
  {path:"work",component: WorkComponent}, 
  {path:"one",component: OneComponent},
  {path:"two",component: TwoComponent},
  {path:"three",component: ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
