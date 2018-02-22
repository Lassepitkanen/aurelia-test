import {bindable} from "aurelia-framework";

export class Checkbox {
  @bindable check: boolean = false;
  checkTrigger(){
    if (this.check == false){
      this.check = true;
    }
    else{this.check = false; }
  }
}
