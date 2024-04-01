import {Component, ComponentFactoryResolver, inject, Injector, OnDestroy} from '@angular/core';
import {DynamicComponent} from "./dynamic.component";

@Component({
  selector: 'app-root',
  template: `
    <div class="test">
      Styles applied when this box is red
    </div>

    <app-dynamic *ngIf="visible"/>

    <button (click)="createComponent()">Click me!</button>
  `
})
export class AppComponent {
  visible = false;

  createComponent(): void {
    this.visible = true;
    setTimeout(() => this.visible = false, 5000);
  }
}
