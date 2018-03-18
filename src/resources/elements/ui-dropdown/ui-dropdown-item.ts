import { bindable, customElement, children } from "aurelia-templating";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

const name = "ui-dropdown-item";

@customElement(name)
export class DropdownItem{
  public el: HTMLElement;
  public isActive: boolean;
  public ea: EventAggregator;
  public text = "asd";

  constructor(el: Element, ea: EventAggregator) {
    this.el = el as HTMLElement;
    this.ea = ea;
  }

  public handleClick(): void {
    this.el.dispatchEvent(new CustomEvent("ui-dropdown-item-clicked", {
      detail: this,
      bubbles: true
    }));
  }
}
