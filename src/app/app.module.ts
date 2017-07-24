import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { TypeaheadFormComponent } from './typeahead-form/typeahead-form.component';
import { TypeaheadSampleComponent } from './typeahead-sample/typeahead-sample.component';
import { WikipediaServiceService } from './shared/wikipedia-service.service';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadFormComponent,
    TypeaheadSampleComponent,
    WikiSearchComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [WikipediaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
