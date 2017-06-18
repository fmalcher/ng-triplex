import { TripleService } from './shared/triple.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { TripleComponent } from './triple/triple.component';
import { SearchComponent } from './search/search.component';
import { TripleExtractorComponent } from './triple-extractor/triple-extractor.component';
import { TriplePartBoxComponent } from './triple-part-box/triple-part-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    TripleComponent,
    SearchComponent,
    TripleExtractorComponent,
    TriplePartBoxComponent
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
