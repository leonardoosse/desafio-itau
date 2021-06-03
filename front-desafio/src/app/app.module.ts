import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { ParametrizacaoComponent } from './parametrizacao/parametrizacao.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    ParametrizacaoComponent,
    CotacaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'cotacao', component: CotacaoComponent},
      { path: 'parametrizacao', component: ParametrizacaoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavegacaoComponent]
})
export class AppModule { }
