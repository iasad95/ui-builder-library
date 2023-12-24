import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { ItemInfoLine } from '../../model/item-info-line';
import { ItemSummary } from '../../model/item-summary';
import { InfoCardComponent } from '../info-card/info-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { InfoCardListComponent } from './info-card-list.component';
xdescribe('InfoCardListComp', () => {
  let summaries: ItemSummary<any>[];
  let comp: InfoCardListComponent;
  let fixture: ComponentFixture<InfoCardListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardComponent, InfoCardListComponent, SearchBarComponent, TooltipDirective],
      imports: [BrowserModule, FormsModule],
      providers: [Overlay],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InfoCardListComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        comp.itemList = [];
        summaries = [];
        fixture.detectChanges();
      });
  }));
  it('should display correct number of info cards', async(() => {
    for (let i = 0; i < 10; i++) {
      summaries.push(new ItemSummary(new ItemInfoLine('item  ' + i, null, null), null, null, null));
    }
    comp.itemList = summaries;
    fixture.detectChanges();
    expect(de.queryAll(By.css('lib-info-card')).length).toEqual(10);
    for (let i = 10; i < 300; i++) {
      summaries.push(new ItemSummary(new ItemInfoLine('item  ' + i, null, null), null, null, null));
    }
    comp.itemList = summaries;
    fixture.detectChanges();
    expect(de.queryAll(By.css('lib-info-card')).length).toEqual(10);
    comp.maxCount = 50;
    fixture.detectChanges();
    expect(de.queryAll(By.css('lib-info-card')).length).toEqual(50);
  }));
  it('should display list size alert', async(() => {
    expect(de.query(By.css('.info-list__alert'))).toBeNull();
    for (let i = 0; i < 50; i++) {
      summaries.push(new ItemSummary(new ItemInfoLine('item  ' + i, null, null), null, null, null));
    }
    comp.itemList = summaries;
    comp.filterable = true;
    fixture.detectChanges();
    el = de.query(By.css('.info-list__alert')).nativeElement;
    expect(el.innerText).toEqual('More than 10 records were returned.\nUse the filter bar to filter your results.');
  }));
  it('should call filter string subject', async(() => {
    spyOn(comp.filterStringSubject, 'next');
    comp.filterChange('');
    expect(comp.filterStringSubject.next).toHaveBeenCalled();
  }));
  it('should emit checkedChange event', async(() => {
    spyOn(comp.checkedChange, 'emit');
    const summary = new ItemSummary(new ItemInfoLine('item  1', null, null), null, null, null);
    comp.handleCheckedValueChange({ item: summary, checked: true });
    expect(comp.checkedChange.emit).toHaveBeenCalledWith({
      item: summary,
      checked: true,
    });
  }));
  it('should emit itemSelected event', async(() => {
    spyOn(comp.itemSelected, 'emit');
    const summary = new ItemSummary(new ItemInfoLine('item  1', null, null), null, null, null);
    comp.handleItemSelected(summary);
    expect(comp.itemSelected.emit).toHaveBeenCalledWith(summary);
  }));
});
