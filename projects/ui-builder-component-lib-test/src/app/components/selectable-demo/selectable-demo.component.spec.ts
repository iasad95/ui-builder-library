import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableDemoComponent } from './selectable-demo.component';

describe('SelectableDemoComponent', () => {
  let component: SelectableDemoComponent;
  let fixture: ComponentFixture<SelectableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectableDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
