import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';
import { Observable, Subject, forkJoin, merge } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterType } from '../../../enums/filter-type';
import { FilterDataRequest } from '../../../model/filter-data-request';
import { FilterOperator } from '../../../model/filter-operator';
import { ItemActionHandler } from '../../../model/item-action-handler';
import { SelectOption } from '../../../model/select-option';
import { UserFilter } from '../../../model/user-filter';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { GridFilterService } from '../services/grid-filter.service';
@Component({
  selector: 'lib-grid-filters-modal',
  templateUrl: './grid-filters-modal.component.html',
  styleUrls: ['./grid-filters-modal.component.scss', '../styles/common-grid-modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GridFiltersModalComponent implements OnInit, OnDestroy {
  @ViewChild('saveFilterRadioButton')
  saveFilterRadioButtonRef: ElementRef<FormFieldComponent>;
  public mode: 'edit' | 'create' = 'edit';
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  public submitted = false;
  public dateFormat = 'mm/dd/yyyy';
  public applyFilterText: 'Apply' | 'Save' | 'Apply & Save' = 'Apply';
  public options = [];
  public operators = [];
  public values = [];
  public readonly FilterTypeEnum = FilterType;
  public headerIconTray: ItemActionHandler[] = [];
  public enableClearAll: boolean;
  public formGroupValueChanged = false;
  public existingFilterProjectID: string = '';
  public invalidPatternMessage = '';
  public userFiltersList: FilterDataRequest[] = [];
  public activeUserFilter: FilterDataRequest;
  public filterDialogComponentRect: { width: number; height: number } = {
    width: NaN,
    height: NaN,
  };
  public getFiltersOptions: (backendQueryUrl: string, searchString: string, options) => Observable<any>;
  private valueForRadio: string = 'value';
  public deselectableRadioButtonFormControl = new UntypedFormControl('', null);
  public radioCheckbox = new SelectOption('', this.valueForRadio);
  private formArrayValueChanged$: Subject<null> = new Subject();
  private componentDestroyed$: Subject<void> = new Subject();
  private retryAddingUserFilter = false;
  get userFiltersFormControl() {
    return this.formGroup.controls['UserFilters'] as UntypedFormArray;
  }
  get nameFormControl() {
    return this.formGroup.controls['Name'];
  }
  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.changeDetectorRef.detectChanges();
    this.updateComponentRect();
  }
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private dialogRef: MatDialogRef<GridFiltersModalComponent>,
    private dialog: MatDialog,
    private domSanitizer: DomSanitizer,
    private gridFilterService: GridFilterService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public modalData: FilterDataRequest,
  ) {
    this.dateFormat = this.gridFilterService.dateFormat;
    this.headerIconTray.push(
      new ItemActionHandler(this.domSanitizer.bypassSecurityTrustHtml('<i class="icon-gen3-warning"></i>'), null, this.domSanitizer.bypassSecurityTrustHtml('test')),
    );
    this.activeUserFilter = modalData;
  }
  private updateComponentRect(): void {
    Object.assign(this.filterDialogComponentRect, {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  ngOnInit(): void {
    this.createFormGroup();
    this.initListeners();
    this.getFiltersOptions = (backendQueryUrl: string, searchString: string, options): Observable<any> => {
      return this.gridFilterService.getFiltersOptions(backendQueryUrl, searchString).pipe(
        tap((filteredOptions) => {
          filteredOptions.forEach((filteredOption) => {
            if (options.findIndex((option) => option.value === filteredOption.value) < 0) {
              options.push(new FilterOperator(filteredOption.key, filteredOption.value, options[0].identifier, options[0].identifier2, options[0].backendQueryUrl));
            }
          });
          this.changeDetectorRef.detectChanges();
        }),
      );
    };
    this.formGroup.controls['SaveFilter'].valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe((state) => {
      this.deselectableRadioButtonFormControl.setValue(state ? this.valueForRadio : null);
    });
    this.updateComponentRect();
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
    this.formArrayValueChanged$.next(null);
    this.formArrayValueChanged$.complete();
  }
  private initListeners() {
    this.gridFilterService.gridFilterDefinitions.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      this.options = this.gridFilterService.options;
      this.operators = this.gridFilterService.operators;
      this.values = this.gridFilterService.values;
    });
    if (Object.keys(this.activeUserFilter || {})?.length) {
      this.patchFormGroupValues(this.activeUserFilter);
      this.applyFilterText = 'Save';
    } else {
      this.gridFilterService.activeFilter.pipe(take(1)).subscribe((activeUserFilter) => {
        this.userFiltersFormControl.clear();
        this.applyFilterText = 'Apply';
        this.activeUserFilter = activeUserFilter;
        this.patchFormGroupValues(activeUserFilter);
        if (!activeUserFilter || !activeUserFilter.name || activeUserFilter.projectGridFilterId?.length < 1) {
          this.formGroup.get('SaveFilter').setValue(false, { emitEvent: false });
          this.nameFormControl.disable();
        } else if (activeUserFilter.projectGridFilterId?.length) {
          this.nameFormControl.enable();
          this.formGroup.get('SaveFilter').setValue(true, { emitEvent: false });
        }
      });
    }
    this.gridFilterService.gridFilters.pipe(takeUntil(this.componentDestroyed$)).subscribe((userFiltersList) => {
      this.userFiltersList = userFiltersList;
      this.nameFormControl.updateValueAndValidity({ emitEvent: false });
    });
    this.formGroup.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe((response) => {
      if (this.retryAddingUserFilter) return null;
      this.formGroupValueChanged = true;
      this.enableClearAll = this.userFiltersFormControl.controls.some((formControl) => formControl.valid);
    });
    this.formGroup
      .get('SaveFilter')
      .valueChanges.pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response) => {
        if (response) {
          this.applyFilterText = 'Apply & Save';
          this.nameFormControl.enable();
        } else {
          this.applyFilterText = 'Apply';
          this.nameFormControl.disable();
        }
      });
  }
  private patchFormGroupValues(activeUserFilter: FilterDataRequest) {
    this.nameFormControl.patchValue(activeUserFilter?.name || 'Custom Filter', {
      emitEvent: false,
    });
    if (activeUserFilter?.userFilters?.length === 0) {
      this.addUserFilter();
    } else {
      activeUserFilter?.userFilters?.forEach((userFilter) => {
        this.addUserFilter(userFilter);
      });
    }
    if (activeUserFilter?.projectGridFilterId) {
      this.mode = 'edit';
      this.existingFilterProjectID = activeUserFilter.projectGridFilterId;
    } else {
      this.mode = 'create';
      if (!activeUserFilter?.name) {
        this.addUserFilter();
      }
    }
  }
  private watchForValueChanges(): void {
    this.formArrayValueChanged$.next(null);
    merge(
      ...this.userFiltersFormControl.controls.map((control: AbstractControl, index: number) =>
        control.valueChanges.pipe(
          takeUntil(this.formArrayValueChanged$),
          map((value) => ({
            rowIndex: index,
            control: control,
            data: value,
          })),
        ),
      ),
    ).subscribe((changes) => {
      const publicFieldNameIdentifier = changes.data.publicFieldName?.identifier;
      const operatorTypeIdentifier = changes.data.operatorType?.identifier;
      let controlFieldLength = 0;
      if (publicFieldNameIdentifier > -1 && operatorTypeIdentifier > -1) {
        controlFieldLength = this.values[changes.data.publicFieldName?.identifier][changes.data.operatorType?.identifier]?.length;
        for (let index = 0; index < controlFieldLength; index++) {
          if (this.userFiltersFormControl.at(changes.rowIndex).get('Values').value?.length < 1) {
            (this.userFiltersFormControl.at(changes.rowIndex).get('Values') as UntypedFormArray).clear({ emitEvent: false });
            (this.userFiltersFormControl.at(changes.rowIndex).get('Values') as UntypedFormArray).push(new UntypedFormControl(), { emitEvent: false });
          }
        }
      }
      this.changeDetectorRef.detectChanges();
    });
  }
  private createFormGroup(): void {
    this.formGroup = this._formBuilder.group({
      Name: new UntypedFormControl('Custom Filter'),
      SaveFilter: new UntypedFormControl(false),
      UserFilters: this._formBuilder.array([]),
    });
  }
  private transformFilter() {
    const userFilterCriteria = [];
    this.submitted = true;
    if (this.formGroup.valid) {
      this.userFiltersFormControl.value.forEach((userFilter) => {
        if (userFilter.publicFieldName?.value && userFilter.operatorType?.value) {
          let values = [];
          userFilter.Values.forEach((userFilterValue) => {
            if (userFilter.operatorType?.identifier2 === FilterType.SingleSelect) {
              values.push(userFilterValue?.value?.toString());
            } else if (userFilter.operatorType?.identifier2 === FilterType.Text || userFilter.operatorType?.identifier2 === FilterType.Number) {
              values.push(userFilterValue);
            } else if (userFilter.operatorType?.identifier2 === FilterType.MultiSelect || userFilter.operatorType?.identifier2 === FilterType.AutoCompleteMulti) {
              values = userFilterValue?.map((multiSelectValue) => multiSelectValue.value?.toString());
            } else if (userFilter.operatorType?.identifier2 === FilterType.DateFilter) {
              if (moment.isMoment(userFilterValue)) {
                values.push(userFilterValue.format(this.dateFormat));
              } else if (userFilter.operatorType.value === 'Between') {
                const startValue = userFilterValue?.start ? userFilterValue?.start.format('YYYY-MM-DD HH:mm:ss') : userFilterValue[0];
                const endValue = userFilterValue?.end ? userFilterValue?.end.format('YYYY-MM-DD HH:mm:ss') : userFilterValue[1];
                values = [startValue, endValue];
              }
            }
          });
          userFilterCriteria.push({
            publicFieldName: userFilter.publicFieldName?.value,
            operatorType: userFilter.operatorType?.value,
            values: values,
          });
        }
      });
      return {
        name: this.formGroup.getRawValue().Name,
        projectGridFilterId: this.existingFilterProjectID?.length ? this.existingFilterProjectID : undefined,
        userFilters: userFilterCriteria,
      };
    }
    return null;
  }
  private saveFilterValue(saveOnly: boolean = false): void {
    const filterDataRequest = this.transformFilter();
    this.gridFilterService.createUpdateUserFilter(filterDataRequest).subscribe(
      (response) => {
        this.dialogRef.close();
        if (saveOnly) {
          return;
        }
        if (!filterDataRequest.projectGridFilterId) {
          this.gridFilterService.applyUserFilter({
            ...filterDataRequest,
            projectGridFilterId: response.ProjectGridFilterCreatedId,
          });
        } else {
          this.gridFilterService.applyUserFilter(filterDataRequest);
        }
      },
      (validationErrors) => {
        validationErrors.forEach((validationError) => {
          if (validationError.ErrorCode === 'Duplicate') {
            this.gridFilterService.getUserFilters();
            this.invalidPatternMessage = validationError.DisplayMessage;
          }
        });
      },
    );
  }
  private saveAndReplaceFilterValue(saveOnly: boolean = false): void {
    const dupeFilterIndex: number = this.userFiltersList
      .map((userFilter, index) => (userFilter.projectGridFilterId !== this.existingFilterProjectID && this.nameFormControl.value === userFilter.name ? index : undefined))
      .filter((v) => v !== undefined)[0];
    if (dupeFilterIndex !== undefined) {
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        disableClose: true,
        width: '500px',
        panelClass: 'grid-filter-confirmation',
        data: {
          title: 'Are you sure want to replace the existing filter?',
          headerIconTray: this.headerIconTray,
          dialogMessage: `<div class="dialog-message--bold"> ${this.nameFormControl.value} </div>This action can't be undone.`,
          confirmText: 'Continue',
        },
      });
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          this.gridFilterService.deleteUserFilter(dupeFilterIndex);
          this.saveFilterValue(saveOnly);
        }
      });
    } else {
      this.saveFilterValue(saveOnly);
    }
  }
  public handleClickCancel(): void {
    this.dialogRef.close(false);
  }
  public handleClickSave(): void {
    if (!this.formGroup.valid) return;
    if (this.applyFilterText === 'Apply') {
      this.dialogRef.close();
      this.nameFormControl.setValue('Custom Filter', { emitEvent: false });
      this.existingFilterProjectID = '';
      this.gridFilterService.applyUserFilter(this.transformFilter());
    } else if (this.applyFilterText === 'Save') {
      this.saveAndReplaceFilterValue(true);
    } else {
      this.handleClickSaveApply();
    }
  }
  public handleClickSaveApply(): void {
    if (!this.formGroup.valid) return;
    this.saveAndReplaceFilterValue();
  }
  public addUserFilter(userFilterCriteria?: UserFilter) {
    let publicFieldNameValue: FilterOperator<any>;
    let operatorTypeValue: FilterOperator<any>;
    let controlValues = [];
    const filterObservables = [];
    this.retryAddingUserFilter = false;
    if (userFilterCriteria) {
      this.options.find((option: FilterOperator<any>) => {
        if (option.value === userFilterCriteria.publicFieldName) {
          publicFieldNameValue = option;
          this.operators[option.identifier].find((operator: FilterOperator<any>) => {
            if (operator.value === userFilterCriteria.operatorType) {
              operatorTypeValue = operator;
              this.values[option.identifier][operator.identifier]?.find((controlField: FilterOperator<any>[]) => {
                const controlFieldValues: FilterOperator<any>[] = [];
                controlField.find((controlFieldValue: FilterOperator<any>) => {
                  if (userFilterCriteria.values.indexOf(controlFieldValue.value?.toString()) > -1) {
                    controlFieldValues.push(controlFieldValue);
                  }
                });
                if (operator.identifier2 === this.FilterTypeEnum.MultiSelect) {
                  controlValues.push(new UntypedFormControl(controlFieldValues));
                } else if (operator.identifier2 === this.FilterTypeEnum.AutoCompleteMulti) {
                  const filterValues = this.values[option.identifier][operator.identifier][0];
                  userFilterCriteria.values.forEach((filterValue) => {
                    if (filterValues.findIndex((controlFieldValue) => controlFieldValue?.value?.toString() === filterValue?.toString()) < 0) {
                      filterObservables.push(this.gridFilterService.getFilterOptionData(filterValues[0].backendQueryUrl, filterValue));
                    }
                  });
                  if (filterObservables.length) {
                    forkJoin(filterObservables).subscribe((filteredOptions) => {
                      filteredOptions.forEach((filteredOption: any) => {
                        if (filterValues.findIndex((optionx) => optionx.value === filteredOption.value) < 0) {
                          filterValues.push(
                            new FilterOperator(filteredOption.key, filteredOption.value, filterValues[0].identifier, filterValues[0].identifier2, filterValues[0].backendQueryUrl),
                          );
                        }
                      });
                      this.addUserFilter(userFilterCriteria);
                    });
                    this.retryAddingUserFilter = true;
                  } else {
                    controlValues.push(new UntypedFormControl(controlFieldValues));
                  }
                } else if (operator.identifier2 === this.FilterTypeEnum.DateFilter) {
                  controlValues = [new UntypedFormControl(userFilterCriteria.values)];
                } else if (operator.identifier2 === this.FilterTypeEnum.Text || operator.identifier2 === this.FilterTypeEnum.Number) {
                  controlValues = [new UntypedFormControl(userFilterCriteria.values)];
                } else {
                  controlValues.push(controlFieldValues);
                }
              });
            }
          });
        }
      });
    }
    if (operatorTypeValue?.identifier2 === this.FilterTypeEnum.AutoCompleteMulti && this.retryAddingUserFilter) return null;
    const userFilterGroup = this._formBuilder.group({
      publicFieldName: [publicFieldNameValue, Validators.required],
      operatorType: [operatorTypeValue, Validators.required],
      Values: this._formBuilder.array(controlValues),
    });
    this.userFiltersFormControl.push(userFilterGroup);
    this.watchForValueChanges();
    this.changeDetectorRef.detectChanges();
  }
  public handleRowDeleted(rowIndex: number, event: any): void {
    event?.stopPropagation();
    this.userFiltersFormControl.removeAt(rowIndex);
    if (this.userFiltersFormControl.value.length === 0) {
      this.addUserFilter();
    }
  }
  public handleClearAll(): void {
    this.userFiltersFormControl.clear();
    this.addUserFilter();
  }
}
