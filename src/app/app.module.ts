import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListesComponent } from './listes/listes.component';
import { ContratsComponent } from './contrats/contrats.component';
import { AuthService } from './auth.service';
import { ListesService } from './listes.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AdminComponent } from './admin/admin.component';
import { CaissierComponent } from './caissier/caissier.component';
import { UserComponent } from './user/user.component';
import { OperationsComponent } from './operations/operations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetraitComponent } from './retrait/retrait.component';
import { CompteUserComponent } from './compte-user/compte-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListesComponent,
    ContratsComponent,
    PartenaireComponent,
    AdminComponent,
    CaissierComponent,
    UserComponent,
    OperationsComponent,
    RetraitComponent,
    CompteUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, ListesService
    ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
