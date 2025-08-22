import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDemoComponent } from './progressbar-demo.component';

describe('ProgressbarDemoComponent', () => {
  let component: ProgressbarDemoComponent;
  let fixture: ComponentFixture<ProgressbarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressbarDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
