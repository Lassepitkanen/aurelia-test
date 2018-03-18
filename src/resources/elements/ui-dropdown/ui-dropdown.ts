import { children, bindable, customElement } from "aurelia-templating";
import { DropdownItem } from './ui-dropdown-item';

const name = "ui-dropdown";

@customElement(name)
export class Dropdown {
  public isActive: boolean;
  public defaultTextActive;
  public defaultText;

  constructor(){
    this.isActive = false;
    this.defaultTextActive = true;
    this.defaultText = "Gender";
  }
  
  @children("ui-dropdown-item")
  public itemChildren: DropdownItem[];

  handleClick(){
    this.isActive = !this.isActive;
  }

  public handleItemClicked = (event: CustomEvent): boolean => {
    this.defaultTextActive = false;
    const clickedItem = event.detail as DropdownItem;
    for (let i = 0; i < this.itemChildren.length; i++) {
      const item = this.itemChildren[i];
      if (item === clickedItem) {
        item.isActive = !item.isActive;
        this.defaultText = item.text;
      } else {
        item.isActive = false;
      }
    }

    event.stopPropagation();
    return false;
  }
}
