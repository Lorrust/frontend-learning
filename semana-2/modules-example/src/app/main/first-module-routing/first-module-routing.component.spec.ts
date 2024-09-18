import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleRoutingComponent } from './first-module-routing.component';

describe('FirstModuleRoutingComponent', () => {
  let component: FirstModuleRoutingComponent;
  let fixture: ComponentFixture<FirstModuleRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstModuleRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstModuleRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
