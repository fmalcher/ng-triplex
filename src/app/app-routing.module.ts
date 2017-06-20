import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripleExtractorComponent } from './triple-extractor/triple-extractor.component';
import { DBPediaSearchComponent } from './dbpedia-search/dbpedia-search.component';

const routes: Routes = [
  { path: '', component: TripleExtractorComponent },
  { path: 'dbpedia', component: DBPediaSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
