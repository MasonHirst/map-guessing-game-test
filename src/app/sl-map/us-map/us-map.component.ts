import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  Input,
} from '@angular/core';
import { MapStates } from './map.service';

@Component({
  selector: 'app-us-map',
  templateUrl: './us-map.component.html',
  styleUrls: ['./us-map.component.css'],
})
export class UsMapComponent implements OnChanges, OnInit {
  @Input()
  ids: any;
  @Input()
  enableTooltip: boolean;
  @Input()
  toolTipObject: any;
  @Input()
  colors: any = {
    unfill: '#b6b6b6',
    fill: '#518a38',
  };
  showToolTip: boolean;
  change: any;
  mapStates: MapStates;

  // game variables
  allStates: any;
  correctStates: any;
  missedStates: any;

  constructor() {}
  ngOnInit(): void {}

  onClickState(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const dataId = targetElement.getAttribute('data-id');
    const dataName = targetElement.getAttribute('data-name');
    document.getElementById(dataId).style.fill = '#7872E8';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setUnfillColor();
    this.change = JSON.parse(JSON.stringify(changes.ids));
    this.change.currentValue.forEach((data) => {
      document.getElementById(data.code).style.fill = this.colors.fill;
    });
  }
  // gets the colors from @input param and set all the bg color to given color
  setUnfillColor() {
    Object.keys(this.mapStates.statelist).forEach((id) => {
      document.getElementById(id).style.fill = this.colors.unfill;
    });
  }

  mouseEnter(ttid, e, id) {
    document.getElementById(id).style['stroke-width'] = '3.5';
    document.getElementById(id).style.stroke = '#FF0000';
  }
  mouseLeave(ttid, e, id) {
    document.getElementById(id).style['stroke-width'] = '0.98';
    document.getElementById(id).style.stroke = '#000000';
  }
}
