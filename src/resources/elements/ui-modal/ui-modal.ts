import { bindable, customElement } from "aurelia-templating";

const name = "ui-modal";

@customElement(name)
export class Modal {
  public isActive: boolean;

  constructor() {
    this.isActive = true;
  }

  public handleClick(){
    if (this.isActive)
      this.isActive = false;
  }
}
