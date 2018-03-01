import { IAccordionItem } from './../resources/elements/ui-accordion';
export class Accordion {
  public items: IAccordionItem[];

  constructor() {
    this.items = [];

    this.items.push({
      title: "hullo1",
      content: "woop1"
    }, {
        title: "hullo2",
        content: "woop2"
      }, {
        title: "hullo3",
        content: "woop3"
      });
  }
}
