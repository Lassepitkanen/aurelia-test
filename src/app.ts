import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';

    config.map([
      { route: ['', 'home'],  name: 'home',  moduleId: 'components/home/home', nav: true, title: 'Home' }
    ]);
  }
}
