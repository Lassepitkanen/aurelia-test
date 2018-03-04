import { bindable, customElement, children } from "aurelia-templating";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

const name = "ui-dropdown-item";

@customElement(name)
export class DropdownItem{
  public el: HTMLElement;
  public isActive: boolean;

  constructor(el: Element) {
    this.el = el as HTMLElement;
  }

  public handleClick($event){
    this.isActive = !this.isActive;

  }
}
