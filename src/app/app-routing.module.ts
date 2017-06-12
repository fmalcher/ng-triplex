import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripleExtractorComponent } from './triple-extractor/triple-extractor.component';

const routes: Routes = [
  { path: '', component: TripleExtractorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
