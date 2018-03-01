import { bindable, customElement } from "aurelia-templating";
import { getLogger } from "aurelia-logging";

const name = "ui-checkbox";
const logger = getLogger(name);

@customElement(name)
export class Checkbox {
  @bindable()
  public label: string;

  @bindable()
  public checked: boolean;

  constructor() {
    this.checked = false;
    this.label = "[no label]";
  }
}
