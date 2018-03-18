import { bindable, customElement } from "aurelia-templating";

const name = "ui-rating";

@customElement(name)
export class Rating {
  @bindable()
  public isActive: boolean;

  constructor(){
    this.isActive = false;
  }

  public handleClick(){
    this.isActive = !this.isActive;
  }
}
