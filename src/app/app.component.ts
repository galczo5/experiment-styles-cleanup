import {Component, ComponentFactoryResolver, inject, Injector, OnDestroy} from '@angular/core';
import {DynamicComponent} from "./dynamic.component";

@Component({
  selector: 'app-root',
  template: `
    <div class="test">
      Styles applied when this box is red
    </div>

    <button (click)="createComponent()">Click me!</button>
  `
})
export class AppComponent {
  private readonly componentFactoryResolver = inject(ComponentFactoryResolver);
  private readonly injector = inject(Injector);

  createComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = factory.create(this.injector);

    setTimeout(() => componentRef.destroy(), 5000);
  }
}
