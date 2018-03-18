export class Nag {
  public display: string;

  constructor() {
    this.display = 'display: block;';
  }

  public handleClick(){
    this.display = 'display: none;'
  }
}
