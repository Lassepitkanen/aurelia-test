import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';


export function configure(fxconfig: FrameworkConfiguration): void {
  fxconfig.globalResources([
    PLATFORM.moduleName("resources/elements/ui-checkbox"),
    PLATFORM.moduleName("resources/elements/ui-accordion/ui-accordion"),
    PLATFORM.moduleName("resources/elements/ui-accordion/ui-accordion-title"),
    PLATFORM.moduleName("resources/elements/ui-accordion/ui-accordion-content"),
    PLATFORM.moduleName("resources/elements/ui-tab/ui-tab"),
    PLATFORM.moduleName("resources/elements/ui-tab/ui-tab-item"),
    PLATFORM.moduleName("resources/elements/ui-dropdown/ui-dropdown")
  ]);
}
