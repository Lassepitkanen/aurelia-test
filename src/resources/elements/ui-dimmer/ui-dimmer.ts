import { bindable, customElement } from "aurelia-templating";

const name = "ui-dimmer";

@customElement(name)
export class Dimmer {
  @bindable()
  public isActive: boolean;

  constructor(){
    this.isActive = false;
  }

  public activateDim(){
    this.isActive = !this.isActive;
  } 
}
