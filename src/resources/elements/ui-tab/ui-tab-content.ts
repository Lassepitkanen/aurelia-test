import { bindable, customElement } from "aurelia-templating";

const name = "ui-tab-content";

@customElement(name)
export class TabContent {
  public el: HTMLElement;

  @bindable()
  public isActive: boolean;

  constructor(el: Element) {
    this.el = el as HTMLElement;
    this.isActive = false;
  }
}
