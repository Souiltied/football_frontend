import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MakeProvider, ValueAccessor } from "../../models/value-accessor";
import { Dropdown, DropdownItem } from "../dropdown/dropdown-interface";
import { Option } from '../../models/option';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    MakeProvider(DropdownComponent)
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends ValueAccessor implements OnChanges{

  constructor() {
    super();
  }

  @Input()
  tooltip;

  @Input()
  selection;

  @Input()
  items: Option;

  @Input()
  isMultiple?: boolean = false;

  @Output() selectionChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges){
    let test = changes.items.currentValue;
    if(changes.items.currentValue.length > 0) {
      this.writeValue(null);
      this.selection = null;
    }
  }

  handleChange(item: DropdownItem) {
    this.writeValue(item);
    this.selectionChange.emit(item);
  }
}