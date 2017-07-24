import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import {switchMap} from 'rxjs/operator/switchMap';
import {_do} from 'rxjs/operator/do';
import {_catch} from 'rxjs/operator/catch';
import {of} from 'rxjs/observable/of';

import { WikipediaServiceService } from './../shared/wikipedia-service.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private service: WikipediaServiceService) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    _do.call(
      switchMap.call(
        _do.call(
          distinctUntilChanged.call(
            debounceTime.call(text$, 300)),
          () => this.searching = true),
        term =>
          _catch.call(
            _do.call(this.service.search(term), () => this.searchFailed = false),
            () => {
              this.searchFailed = true;
              return of.call([]);
            }
          )
      ),
      () => this.searching = false);

}
