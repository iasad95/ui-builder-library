import { DebugElement, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { TextListComponent } from './text-list.component';
xdescribe('TextListComponent', () => {
  let component: TextListComponent;
  let fixture: ComponentFixture<TextListComponent>;
  let de: DebugElement;
  let deArray: DebugElement[];
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextListComponent],
      imports: [BrowserModule],
      providers: [Renderer2],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TextListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });
  it('should contain the correct list of strings passed', async(() => {
    component.textListStrings = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer ',
      'item 2',
      'item 3',
      'item 4',
      'item 5',
    ];
    fixture.detectChanges();
    deArray = de.queryAll(By.css('.text-list__item-text'));
    expect(deArray).not.toBeNull();
    expect(deArray.length).toEqual(component.textListStrings.length);
  }));
  it('should call the delete function on trash-icon click', async(() => {
    component.textListStrings = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
    fixture.detectChanges();
    component.deleteTextItem(component.textListStrings[0]);
    expect(component.textListStrings.length).toEqual(4);
    fixture.detectChanges();
    spyOn(component, 'deleteTextItem');
    de = de.query(By.css('.text-list__trash-icon'));
    el = de.nativeElement;
    el.click();
    expect(component.deleteTextItem).toHaveBeenCalledWith(component.textListStrings[0]);
  }));
  it('should show buttons on input click', async(() => {
    fixture.detectChanges();
    component.handleButtonToggle();
    expect(component.buttonsHidden).toEqual(false);
    fixture.detectChanges();
    spyOn(component, 'handleButtonToggle');
    de = de.query(By.css('.text-list__input'));
    el = de.nativeElement;
    el.click();
    expect(component.handleButtonToggle).toHaveBeenCalled();
  }));
  it('should add the item to the list on add-button click', async(() => {
    component.addTextItem('test item');
    fixture.detectChanges();
    expect(component.textListStrings.length).toEqual(1);
    spyOn(component, 'addTextItem');
    component.handleButtonToggle();
    fixture.detectChanges();
    de = de.query(By.css('.text-list__add-button'));
    el = de.nativeElement;
    el.click();
    expect(component.addTextItem).toHaveBeenCalled();
  }));
  it('should hide buttons on cancel-button click', async(() => {
    fixture.detectChanges();
    component.handleButtonToggle();
    expect(component.buttonsHidden).toEqual(false);
    fixture.detectChanges();
    spyOn(component, 'handleButtonToggle');
    de = de.query(By.css('.text-list__cancel-button'));
    el = de.nativeElement;
    el.click();
    expect(component.handleButtonToggle).toHaveBeenCalled();
  }));
});
