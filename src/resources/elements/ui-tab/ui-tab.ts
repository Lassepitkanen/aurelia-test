import { bindable, customElement, children } from "aurelia-templating";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { TabItem } from './ui-tab-item';

const name = "ui-tab"

@customElement(name)
export class Tab {
  public el: HTMLElement;
  public ea: EventAggregator;

  constructor(el: Element, ea: EventAggregator) {
    this.el = el as HTMLElement;
    this.ea = ea;
  }

  @children("ui-tab-item")
  public itemChildren: TabItem[];

  public handleItemClicked = (event: CustomEvent): boolean => {
    const clickedItem = event.detail as TabItem;
    for (let i = 0; i < this.itemChildren.length; i++) {
      const item = this.itemChildren[i];
      if (item === clickedItem) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    }

    event.stopPropagation();
    return false;
  }
}
