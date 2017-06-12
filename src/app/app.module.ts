import { TripleService } from './shared/triple.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { TripleSetComponent } from './triple-set/triple-set.component';
import { SearchComponent } from './search/search.component';
import { TripleExtractorComponent } from './triple-extractor/triple-extractor.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    TripleSetComponent,
    SearchComponent,
    TripleExtractorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TripleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
