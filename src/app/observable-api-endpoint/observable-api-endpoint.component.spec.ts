import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableApiEndpointComponent } from './observable-api-endpoint.component';

describe('ObservableApiEndpointComponent', () => {
  let component: ObservableApiEndpointComponent;
  let fixture: ComponentFixture<ObservableApiEndpointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableApiEndpointComponent]
    });
    fixture = TestBed.createComponent(ObservableApiEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
