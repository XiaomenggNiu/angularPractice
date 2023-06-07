import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
// import { ProductsModule } from './products/products.module';
import { ErrorModule } from './error/error.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LifecycleHooksComponent } from './lifecycleHooks/lifecycle-hooks/lifecycle-hooks.component';
import { ChildComponent } from './lifecycleHooks/child/child.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginService } from './login/login.service';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ChildComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    // ProductsModule,
    ErrorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
