import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEventEmitterComponent } from './observable-event-emitter.component';

describe('ObservableEventEmitterComponent', () => {
  let component: ObservableEventEmitterComponent;
  let fixture: ComponentFixture<ObservableEventEmitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableEventEmitterComponent]
    });
    fixture = TestBed.createComponent(ObservableEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
