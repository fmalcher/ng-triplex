import { TripleService } from './shared/triple.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { TripleSetComponent } from './triple-set/triple-set.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    TripleSetComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TripleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
