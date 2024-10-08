import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleComponent } from './first-module.component';

describe('FirstModuleComponent', () => {
  let component: FirstModuleComponent;
  let fixture: ComponentFixture<FirstModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
