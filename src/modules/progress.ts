import { bindable} from "aurelia-templating";

export class Progress {
  @bindable()
  public progress: number;
  public incrementBy: number;
  public decrementBy: number;

  constructor(){
    this.progress = 0;
    this.incrementBy = 10;
    this.decrementBy = 25;
  }

  public incrementProgress(){
    if(this.progress + this.incrementBy >= 100){
      this.progress = 100;
    }
    else (this.progress += this.incrementBy);
  }

  public decrementProgress(){
    if(this.progress - this.decrementBy <= 0){
      this.progress = 0;
    }
    else (this.progress -= this.decrementBy);
  }
}
