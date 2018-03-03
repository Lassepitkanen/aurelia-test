import { ITabItem } from './../resources/elements/ui-tab';

export class Tab {
  public items: ITabItem[];

  constructor() {
    this.items = [];

    this.items.push({
      title: "hullo1",
    }, {
        title: "hullo2",
      }, {
        title: "hullo3",
      });
  }
}
