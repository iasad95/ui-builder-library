import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { InfoCardPlaceholderComponent } from './info-card-placeholder.component';
xdescribe('InfoCardPlaceholderComp', () => {
  let comp: InfoCardPlaceholderComponent;
  let fixture: ComponentFixture<InfoCardPlaceholderComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardPlaceholderComponent],
      imports: [BrowserModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InfoCardPlaceholderComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
      });
  }));
  it('should display the correct number of placeholders', async(() => {
    expect(de.queryAll(By.css('.placeholders__placeholder')).length).toEqual(2);
    comp.count = 5;
    fixture.detectChanges();
    expect(de.queryAll(By.css('.placeholders__placeholder')).length).toEqual(5);
  }));
  it('should display avatar based on input', async(() => {
    expect(de.queryAll(By.css('.placeholders__avatar')).length).toEqual(0);
    comp.count = 1;
    comp.avatar = true;
    fixture.detectChanges();
    expect(de.queryAll(By.css('.placeholders__avatar')).length).toEqual(1);
  }));
});
