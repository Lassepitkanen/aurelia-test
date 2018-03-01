import { AccordionTitle } from './ui-accordion-title';
import { bindable, customElement, children } from "aurelia-templating";
import { AccordionContent } from './ui-accordion-content';
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

const name = "ui-accordion";

@customElement(name)
export class Accordion {
  public el: HTMLElement;
  public ea: EventAggregator;
  public isStyled: boolean;

  @bindable()
  public isRoot: boolean;

  @children("ui-accordion-title")
  public titleChildren: AccordionTitle[];

  @children("ui-accordion-content")
  public contentChildren: AccordionContent[];

  constructor(el: Element, ea: EventAggregator) {
    this.el = el as HTMLElement;
    this.ea = ea;
    this.isStyled = false;
    this.isRoot = false;
  }

  private subscription: Subscription;
  public attached(): void {
    if (this.el.hasAttribute("styled")) {
      this.isStyled = true;
    }
    //this.subscription = this.ea.subscribe("ui-accordion:title:click", this.handleTitleClicked);
  }

  public detached(): void {
    // this.subscription.dispose();
    // this.subscription = null;
  }

  public handleTitleClicked = (event: CustomEvent): boolean => {
    const clickedTitle = event.detail as AccordionTitle;
    for (let i = 0; i < this.titleChildren.length; i++) {
      const title = this.titleChildren[i];
      const content = this.contentChildren[i];
      if (title === clickedTitle) {
        title.isActive = !title.isActive;
        content.isActive = !content.isActive;
      } else {
        title.isActive = false;
        content.isActive = false;
      }
    }

    event.stopPropagation();
    return false;
  };

  // public handleTitleClicked = (clickedTitle: AccordionTitle) => {
  //   if (this.titleChildren.indexOf(clickedTitle) === -1) {
  //     return;
  //   }
  //   for (let i = 0; i < this.titleChildren.length; i++) {
  //     const title = this.titleChildren[i];
  //     const content = this.contentChildren[i];
  //     if (title === clickedTitle) {
  //       title.isActive = !title.isActive;
  //       content.isActive = !content.isActive;
  //     } else {
  //       title.isActive = false;
  //       content.isActive = false;
  //     }
  //   }
  // };
}
