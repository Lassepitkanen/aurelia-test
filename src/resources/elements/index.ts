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
    PLATFORM.moduleName("resources/elements/ui-tab/ui-tab-content"),
    PLATFORM.moduleName("resources/elements/ui-dropdown/ui-dropdown"),
    PLATFORM.moduleName("resources/elements/ui-dropdown/ui-dropdown-item"),
    PLATFORM.moduleName("resources/elements/ui-dimmer/ui-dimmer"),
    PLATFORM.moduleName("resources/elements/ui-rating/ui-rating"),
    PLATFORM.moduleName("resources/elements/ui-modal/ui-modal")
  ]);
}
