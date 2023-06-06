import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClose($event: any) {
    console.log("Close", $event);
  }
  onOpen($event: any) {
    console.log("Open", $event);
  }
}
