import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableBasicComponent } from './observable-basic.component';

describe('ObservableBasicComponent', () => {
  let component: ObservableBasicComponent;
  let fixture: ComponentFixture<ObservableBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableBasicComponent]
    });
    fixture = TestBed.createComponent(ObservableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
