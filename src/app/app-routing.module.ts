import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListesComponent } from './listes/listes.component';
import { ContratsComponent } from './contrats/contrats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { UserComponent } from './user/user.component';
import { CaissierComponent } from './caissier/caissier.component';
import { OperationsComponent } from './operations/operations.component';
import { RetraitComponent } from './retrait/retrait.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'listes',
    component: ListesComponent
  },
  {
    path:'contrats',
    component: ContratsComponent,

  },
  {
    path:'login',
    component: LoginComponent,

  },
  {
    path:'register',
    component: RegisterComponent,

  },
  {
    path:'partenaire',
    component: PartenaireComponent,

  },
  {
    path:'admin',
    component: AdminComponent,

  },
  {
    path:'user',
    component: UserComponent,

  },
  {
    path:'caissier',
    component: CaissierComponent,

  }
  ,
  {
    path:'operations',
    component: OperationsComponent,

  }
  ,
  {
    path:'retrait',
    component: RetraitComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
