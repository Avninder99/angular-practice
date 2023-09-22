import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-box',
  templateUrl: './animated-box.component.html',
  styleUrls: ['./animated-box.component.css'],
  animations: [
    trigger('moveBox', [
      state('left', style({
        transform: 'translateX(0) rotateZ(0)',
        backgroundColor: 'blue',
      })),
      state('middle', style({
        transform: 'translateX(200px) rotateZ(-0.25turn)',
        backgroundColor: 'red'
      })),
      state('right', style({
        transform: 'translateX(400px) rotateZ(-0.5turn)',
        backgroundColor: 'green'
      })),
      transition('left => middle', [ animate('1s')]),
      transition('middle => right', [ animate('1s')]),
      transition('right => left', [ animate('2s')]),
    ])
  ]
})
export class AnimatedBoxComponent {
  state: string = 'left';
  updateAnimation = () => {
    if(this.state === 'left'){
      this.state = 'middle';
    }
    else if(this.state === 'middle'){
      this.state = 'right';
    }
    else{
      this.state = 'left';
    }
  }
}
