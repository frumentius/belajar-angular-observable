import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableMulticastComponent } from './observable-multicast.component';

describe('ObservableMulticastComponent', () => {
  let component: ObservableMulticastComponent;
  let fixture: ComponentFixture<ObservableMulticastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableMulticastComponent]
    });
    fixture = TestBed.createComponent(ObservableMulticastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
