import { bindable, customElement } from "aurelia-templating";
import { EventAggregator } from "aurelia-event-aggregator";

const name = "ui-accordion-title";

@customElement(name)
export class AccordionTitle {
  public el: HTMLElement;

  @bindable()
  public isActive: boolean;

  public ea: EventAggregator;

  constructor(el: Element, ea: EventAggregator) {
    this.el = el as HTMLElement;
    this.isActive = false;
    this.ea = ea;
  }

  public handleClick(): void {
    //this.ea.publish("ui-accordion:title:click", this);
    this.el.dispatchEvent(new CustomEvent("ui-accordion-title-clicked", {
      detail: this,
      bubbles: true
    }));
  }
}
