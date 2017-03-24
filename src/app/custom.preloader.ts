import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class CustomPreloader implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.path === 'contact' ? load() : Observable.of(null);
  }
}
