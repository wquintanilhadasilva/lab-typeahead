import { Injectable } from '@angular/core';

import {Jsonp, URLSearchParams} from '@angular/http';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operator/map';

@Injectable()
export class WikipediaServiceService {

  constructor(private _jsonp: Jsonp) { }

  public search(term: string) {
    if (term === '') {
      return of.call([]);
    }

    const wikiUrl = 'https://en.wikipedia.org/w/api.php';
    const params = new URLSearchParams();

    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return map.call(this._jsonp.get(wikiUrl, {search: params}), response =>
              <string[]> response.json()[1]);

  }

}
