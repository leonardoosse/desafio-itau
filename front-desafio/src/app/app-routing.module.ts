import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacaoComponent } from './parametrizacao/parametrizacao.component';

const routes: Routes = [
  {path: 'parametrizacao', component: ParametrizacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
