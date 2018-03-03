import { bindable, customElement } from "aurelia-templating";

const name = "ui-dropdown";

@customElement(name)
export class Dropdown {
  public isActive: boolean;

  constructor(){
    this.isActive = false;
  }
  
  handleClick(){
    this.isActive = !this.isActive;
  }
}
