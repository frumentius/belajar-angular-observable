import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './observable-event-emitter.component.html',
  styleUrls: ['./observable-event-emitter.component.css']
})

export class ObservableEventEmitterComponent {
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(1);
    } else {
      this.close.emit(0);
    }
  }
}