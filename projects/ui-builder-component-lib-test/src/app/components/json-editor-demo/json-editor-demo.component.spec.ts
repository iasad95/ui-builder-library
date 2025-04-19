import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonEditorDemoComponent } from './json-editor-demo.component';

describe('JsonEditorDemoComponent', () => {
  let component: JsonEditorDemoComponent;
  let fixture: ComponentFixture<JsonEditorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonEditorDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonEditorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
