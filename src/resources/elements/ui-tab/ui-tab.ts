import { TabContent } from './ui-tab-content';
import { resource, bindable, customElement, children } from "aurelia-templating";
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

  public contentTabs: TabContent[];
  public attached(): void {
    let elements = Array.from(document.querySelectorAll("ui-tab-content"));
    this.contentTabs = elements.map(e => e.au.controller.viewModel);
  }

  public handleItemClicked = (event: CustomEvent): boolean => {
    const clickedItem = event.detail as TabItem;
    for (let i = 0; i < this.itemChildren.length; i++) {
      const item = this.itemChildren[i];
      const content = this.contentTabs[i];
      if (item === clickedItem) {
        item.isActive = !item.isActive;
        content.isActive = !content.isActive;
      } else {
        item.isActive = false;
        content.isActive = false;
      }
    }

    event.stopPropagation();
    return false;
  }
}
