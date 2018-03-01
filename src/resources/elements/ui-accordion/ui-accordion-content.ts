import { bindable, customElement } from "aurelia-templating";

const name = "ui-accordion-content";

@customElement(name)
export class AccordionContent {
  public el: HTMLElement;

  @bindable()
  public isActive: boolean;

  constructor(el: Element) {
    this.el = el as HTMLElement;
    this.isActive = false;
  }
}
