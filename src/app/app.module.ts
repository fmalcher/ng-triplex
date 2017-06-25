import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { StripTagsPipe } from 'angular-pipes/src/string/strip-tags.pipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { TripleComponent } from './triple/triple.component';
import { SearchComponent } from './search/search.component';
import { TripleExtractorComponent } from './triple-extractor/triple-extractor.component';
import { TriplePartBoxComponent } from './triple-part-box/triple-part-box.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { DBPediaSearchComponent } from './dbpedia-search/dbpedia-search.component';
import { DbpediaResultComponent } from './dbpedia-result/dbpedia-result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TripleService } from './shared/triple.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    TripleComponent,
    SearchComponent,
    TripleExtractorComponent,
    TriplePartBoxComponent,
    LoadingIndicatorComponent,
    DBPediaSearchComponent,
    DbpediaResultComponent,
    StripTagsPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [TripleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
