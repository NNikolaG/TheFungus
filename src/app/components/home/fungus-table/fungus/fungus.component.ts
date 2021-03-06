import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { $animations } from 'src/app/animations';

@Component({
  selector: 'app-fungus',
  templateUrl: './fungus.component.html',
  styleUrls: ['./fungus.component.scss'],
  animations: $animations
})
export class FungusComponent implements OnInit {

  @Input() data!: any;

  isVisible = false;
  brojac!: number;
  interval!: any;

  constructor(public el: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isVisible = true;
    this.brojac = 1;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.brojac < 1.3) {
        this.brojac += 0.01
      }
      else {
        clearInterval(this.interval);
      }
    }, 5);

  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isVisible = false;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.brojac > 1) {
        this.brojac -= 0.01
      }
      else {
        clearInterval(this.interval);
      }
    }, 5);
  }

  ngOnInit(): void {

  }

  get animateText() {
    if (this.isVisible) {
      return {
        "text-align": "center",
        "animation-name": "fontZoom",
        "animation-duration": "0.5s",
        "animation-fill-mode": "forwards"
      }
    }
    return {
      "text-align": "center",
      "animation-name": "fontOut",
      "animation-duration": "0.5s",
      "animation-fill-mode": "forwards"
    }
  }

  get animateBlock() {
    const scaler = this.brojac;
    if (this.isVisible) {
      return {
        "transform": "scale(" + scaler + "," + scaler + ")",
        "animation-name": "borderCurver",
        "animation-duration": "0.5s",
        "animation-fill-mode": "forwards",
        "z-index": "10"
      }
    }
    return {
      "transform": "scale(" + scaler + "," + scaler + ")",
      "animation-name": "borderCurverOut",
      "animation-duration": "0.5s",
      "animation-fill-mode": "forwards",
      "z-index": "5"
    }
  }

  get hoverLayer() {
    if (this.isVisible) {
      return {
        "animation-name": "hoverLayer",
        "animation-duration": "0.5s",
        "animation-fill-mode": "forwards"
      }
    }
    return {
      "animation-name": "hoverLayerExit",
      "animation-duration": "0.10s",
      "animation-fill-mode": "forwards"
    }
  }

  get borderCurver() {
    if (this.isVisible) {
      return {
        "animation-name": "borderCurver",
        "animation-duration": "0.5s",
        "animation-fill-mode": "forwards"
      }
    }
    return {
      "animation-name": "borderCurverOut",
      "animation-duration": "0.5s",
      "animation-fill-mode": "forwards"
    }
  }
}
