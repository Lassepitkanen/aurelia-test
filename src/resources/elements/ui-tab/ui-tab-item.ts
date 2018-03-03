import { bindable, customElement } from "aurelia-templating";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

const name = "ui-tab-item";

@customElement(name)
export class TabItem {
  public el: HTMLElement;
  public ea: EventAggregator;

  @bindable()
  public isActive: boolean;


  constructor(el: Element, ea: EventAggregator) {
    this.el = el as HTMLElement;
    this.isActive = false;
    this.ea = ea;
  }

  public handleClick(): void {
    //this.ea.publish("ui-accordion:title:click", this);
    this.el.dispatchEvent(new CustomEvent("ui-tab-item-clicked", {
      detail: this,
      bubbles: true
    }));
  }
}
