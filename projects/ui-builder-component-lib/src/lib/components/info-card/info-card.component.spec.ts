import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { ItemActionHandler } from '../../model/item-action-handler';
import { ItemInfoLine } from '../../model/item-info-line';
import { ItemSummary } from '../../model/item-summary';
import { InfoCardComponent } from './info-card.component';
xdescribe('InfoCardComp', () => {
  let summary: ItemSummary<any>;
  let comp: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDirective, InfoCardComponent],
      imports: [BrowserModule],
      providers: [Overlay],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InfoCardComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        summary = new ItemSummary(
          new ItemInfoLine('Item Header', null, () => null, [new ItemActionHandler(<SafeHtml>'#', () => null)]),
          [new ItemInfoLine('Item Subheader', null, () => null)],
          [new ItemInfoLine('Item Detail', null, () => null, [new ItemActionHandler(<SafeHtml>'@', () => null)])],
          null,
        );
        comp.item = summary;
        fixture.detectChanges();
      });
  }));
  it('should validate selectItem functionality', async(() => {
    spyOn(comp.selected, 'emit');
    comp.selectItem();
    expect(comp.selected.emit).not.toHaveBeenCalled();
    comp.selectable = true;
    comp.item.disabled = true;
    fixture.detectChanges();
    comp.selectItem();
    expect(comp.selected.emit).not.toHaveBeenCalled();
    comp.item.disabled = false;
    fixture.detectChanges();
    comp.selectItem();
    expect(comp.selected.emit).toHaveBeenCalled();
    spyOn(comp, 'selectItem');
    el = de.query(By.css('.info-card')).nativeElement;
    el.click();
    expect(comp.selectItem).toHaveBeenCalled();
  }));
  it('should display correct header, subheader, and detail text', async(() => {
    el = de.query(By.css('.info-card__item-header')).nativeElement;
    expect(el.innerText).toEqual('Item Header');
    el = de.query(By.css('.info-card__item-subheader')).nativeElement;
    expect(el.innerText).toEqual('Item Subheader');
    el = de.query(By.css('.info-card__item-detail')).nativeElement;
    expect(el.innerText).toEqual('Item Detail');
  }));
  it('should invoke correct functions on select of header, subheader, and detail', async(() => {
    spyOn(comp.item.header, 'action');
    spyOn(comp.item.subheaders[0], 'action');
    spyOn(comp.item.details[0], 'action');
    comp.item.disabled = true;
    fixture.detectChanges();
    comp.selectHeader();
    expect(comp.item.header.action).not.toHaveBeenCalled();
    comp.selectSubheader(comp.item.subheaders[0]);
    expect(comp.item.subheaders[0].action).not.toHaveBeenCalled();
    comp.selectDetail(comp.item.details[0]);
    expect(comp.item.details[0].action).not.toHaveBeenCalled();
    comp.item.disabled = false;
    comp.selectable = true;
    fixture.detectChanges();
    comp.selectHeader();
    expect(comp.item.header.action).not.toHaveBeenCalled();
    comp.selectSubheader(comp.item.subheaders[0]);
    expect(comp.item.subheaders[0].action).not.toHaveBeenCalled();
    comp.selectDetail(comp.item.details[0]);
    expect(comp.item.details[0].action).not.toHaveBeenCalled();
    comp.selectable = false;
    fixture.detectChanges();
    comp.selectHeader();
    expect(comp.item.header.action).toHaveBeenCalled();
    comp.selectSubheader(comp.item.subheaders[0]);
    expect(comp.item.subheaders[0].action).toHaveBeenCalled();
    comp.selectDetail(comp.item.details[0]);
    expect(comp.item.details[0].action).toHaveBeenCalled();
    spyOn(comp, 'selectHeader');
    spyOn(comp, 'selectSubheader');
    spyOn(comp, 'selectDetail');
    el = de.query(By.css('.info-card__item-header')).nativeElement;
    el.click();
    expect(comp.selectHeader).toHaveBeenCalled();
    el = de.query(By.css('.info-card__item-subheader')).nativeElement;
    el.click();
    expect(comp.selectSubheader).toHaveBeenCalledWith(summary.subheaders[0]);
    el = de.query(By.css('.info-card__item-detail')).nativeElement;
    el.click();
    expect(comp.selectDetail).toHaveBeenCalledWith(summary.details[0]);
  }));
  it('should invoke correct iconTray functions on header, subheader, and detail', async(() => {
    spyOn(comp.item.header.iconTray[0], 'action');
    spyOn(comp.item.details[0].iconTray[0], 'action');
    const elements: HTMLElement[] = de.queryAll(By.css('.info-card__item-icon-tray')).map((elem) => elem.nativeElement);
    expect(elements.length).toEqual(2);
    el = elements[0];
    el.click();
    expect(comp.item.header.iconTray[0].action).toHaveBeenCalledWith(comp.item);
    el = elements[1];
    el.click();
    expect(comp.item.details[0].iconTray[0].action).toHaveBeenCalledWith(comp.item);
  }));
  it('should not display an item visual', async(() => {
    expect(de.query(By.css('.info-card__item-visual'))).toBeNull();
  }));
  it('should display an item abbreviation', async(() => {
    summary.abbreviation = 'IH';
    fixture.detectChanges();
    el = de.query(By.css('.info-card__item-abbrev')).nativeElement;
    expect(el.innerText).toEqual('IH');
  }));
  it('should display an item icon', async(() => {
    summary.icon = <SafeHtml>'<i class="icon icon-star"></i>';
    fixture.detectChanges();
    el = de.query(By.css('.info-card__item-icon')).nativeElement;
    expect(el.innerHTML).toEqual('<i class="icon icon-star"></i>');
  }));
  it('should display an item image', async(() => {
    summary.image = <SafeUrl>'https://www.cosential.com/wp-content/uploads/2018/09/cosential_logo.png';
    fixture.detectChanges();
    el = de.query(By.css('.info-card__item-image')).nativeElement;
    expect(el.getAttribute('src')).toEqual('https://www.cosential.com/wp-content/uploads/2018/09/cosential_logo.png');
  }));
  it('should validate actionHandler functionality', async(() => {
    expect(de.query(By.css('.info-card__action-handler'))).toBeNull();
    summary.actionHandler = new ItemActionHandler(<SafeHtml>'+', () => null);
    fixture.detectChanges();
    el = de.query(By.css('.info-card__action-handler-icon')).nativeElement;
    const actionSpy = spyOn(comp.item.actionHandler, 'action');
    comp.item.disabled = true;
    fixture.detectChanges();
    comp.handleAction(comp.item.actionHandler.action);
    expect(comp.item.actionHandler.action).not.toHaveBeenCalled();
    comp.item.disabled = false;
    comp.selectable = true;
    fixture.detectChanges();
    comp.handleAction(comp.item.actionHandler.action);
    expect(comp.item.actionHandler.action).not.toHaveBeenCalled();
    comp.selectable = false;
    fixture.detectChanges();
    comp.handleAction(comp.item.actionHandler.action);
    expect(comp.item.actionHandler.action).toHaveBeenCalledWith(comp.item);
    spyOn(comp, 'handleAction');
    el.click();
    expect(comp.handleAction).toHaveBeenCalledWith(actionSpy);
  }));
  it('should validate checkbox functionality', async(() => {
    expect(de.query(By.css('.info-card__item-checkbox'))).toBeNull();
    comp.checkable = true;
    fixture.detectChanges();
    comp.item.disabled = true;
    fixture.detectChanges();
    comp.handleCheckedValueChange(true);
    expect(comp.checkedChange.emit).not.toHaveBeenCalled();
    comp.item.disabled = false;
    comp.selectable = true;
    fixture.detectChanges();
    comp.handleCheckedValueChange(true);
    expect(comp.checkedChange.emit).not.toHaveBeenCalled();
    comp.selectable = false;
    fixture.detectChanges();
    comp.handleCheckedValueChange(true);
    expect(comp.checkedChange.emit).toHaveBeenCalledWith({ item: comp.item, checked: true });
    comp.handleCheckedValueChange(false);
    expect(comp.checkedChange.emit).toHaveBeenCalledWith({ item: comp.item, checked: false });
  }));
});
