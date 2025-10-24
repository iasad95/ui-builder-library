import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxTestComponent } from './text-box-test.component';

describe('TextBoxTestComponent', () => {
  let component: TextBoxTestComponent;
  let fixture: ComponentFixture<TextBoxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBoxTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextBoxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
