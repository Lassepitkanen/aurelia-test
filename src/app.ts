import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration, NavigationInstruction } from "aurelia-router";

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';

    config.map([
      { route: ['','accordion'],  name: 'accordion', moduleId: PLATFORM.moduleName('modules/accordion'),  nav: true, title:'Accordion' },
      { route: 'checkbox',  name: 'checkbox', moduleId: PLATFORM.moduleName('modules/checkbox'),  nav: true, title:'Checkbox' },
      { route: 'dimmer',  name: 'dimmer', moduleId: PLATFORM.moduleName('modules/dimmer'),  nav: true, title:'Dimmer' },
      { route: 'dropdown',  name: 'dropdown', moduleId: PLATFORM.moduleName('modules/dropdown'),  nav: true, title:'Dropdown' },
      { route: 'modal',  name: 'modal', moduleId: PLATFORM.moduleName('modules/modal'),  nav: true, title:'Modal' },
      { route: 'nag',  name: 'nag', moduleId: PLATFORM.moduleName('modules/nag'),  nav: true, title:'Nag' },
      { route: 'popup',  name: 'popup', moduleId: PLATFORM.moduleName('modules/popup'),  nav: true, title:'Popup' },
      { route: 'progress',  name: 'progress', moduleId: PLATFORM.moduleName('modules/progress'),  nav: true, title:'Progress' },
      { route: 'rating',  name: 'rating', moduleId: PLATFORM.moduleName('modules/rating'),  nav: true, title:'Rating' },
      { route: 'search',  name: 'search', moduleId: PLATFORM.moduleName('modules/search'),  nav: true, title:'Search' },
      { route: 'shape',  name: 'shape', moduleId: PLATFORM.moduleName('modules/shape'),  nav: true, title:'Shape' },
      { route: 'sidebar',  name: 'sidebar', moduleId: PLATFORM.moduleName('modules/sidebar'),  nav: true, title:'Sidebar' },
      { route: 'sticky',  name: 'sticky', moduleId: PLATFORM.moduleName('modules/sticky'),  nav: true, title:'Sticky' },
      { route: 'tab',  name: 'tab', moduleId: PLATFORM.moduleName('modules/tab'),  nav: true, title:'Tab' }
    ]);
  }
}
